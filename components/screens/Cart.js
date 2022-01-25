import React from 'react';
import {
	View,
	FlatList,
	StyleSheet,
	Image,
	Text,
	ScrollView
} from 'react-native';

import { CartItem } from '../reuse/CartItem';
import { Wrapper, Header, Left, Container, Right, Space, Row, Column, Touchable, H1, P, H4, Footer, Sm, Center, Btn, IconBtn } from '../utils';
import sample_data from '../../sample_data';
import config from '../../config';
// import { Icon } from 'react-native-vector-icons/icon';
import Icon from 'react-native-vector-icons/dist/Feather';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import { scale } from 'react-native-size-matters';


export default class Cart extends React.Component {

	state = {
		_showQuantityModal: false,
		curItem: {},
		curItemQty: 0,
		cart: sample_data.cart,
		cartInProgressItems: [],
		featureProduct: [{ id: 1, name: "pepsi" }, { id: 2, name: "cock" },
		{ id: 3, name: "pepsi-1" }, { id: 4, name: "cock-1" }]
	}

	cartHasItems() {
		return this.state.cart && this.state.cart.lines !== undefined && this.state.cart.lines.length > 0;
	}

	showQuantityModal(item) { }

	updateItemQty(item, qty, increment = false) { }

	deleteItem(lineId, item) { }

	checkout() {
		this.props.navigation.navigate('Address')
	}

	updateCartData(response) { }

	_keyExtractor = (item, index) => item.internalid;

	_renderItem = ({ item }) => (
		<CartItem
			key={item.internalid}
			deleteItem={this.deleteItem.bind(this)}
			updateItemQty={this.updateItemQty.bind(this)}
			showQuantityModal={this.showQuantityModal.bind(this)}
			item={item}
			style={{ marginHorizontal: 2 }}
		/>
	);

	_renderNoItems() {
		return (
			<Center flexDirection={'column'}>

				<Space />

				<Image
					source={require('../../assets/img/empty-cart.png')}
					style={{ width: 200, height: 200, resizeMode: 'cover' }}
				/>

				<H3>Oops!</H3>
				<Sm>Your cart is empty</Sm>
				<Space />
				<Btn label={'Continue Shopping'} />

			</Center>
		);
	}

	_renderCartContent() {

		const { cart } = this.state;

		return (

			<View>

				<FlatList
					key={"cart-item"}
					data={cart.lines}
					extraData={this.state}
					keyExtractor={this._keyExtractor}
					renderItem={this._renderItem}
				/>

				<Space height={10} />

				<Row>
					<Column>
						<P>Subtotal</P>
					</Column>
					<Column align={'flex-end'}>
						<P>{cart.summary.subtotal}</P>
					</Column>
				</Row>

				<Space height={3} />

				<Row>
					<Column>
						<P>Tax Total</P>
					</Column>
					<Column align={'flex-end'}>
						<P>{cart.summary.taxtotal}</P>
					</Column>
				</Row>

				<Space height={3} />

				<Row>
					<Column>
						<P>Shipping</P>
					</Column>
					<Column align={'flex-end'}>
						<P>{cart.summary.estimatedshipping}</P>
					</Column>
				</Row>

				<Space height={3} />

				<Row>
					<Column>
						<P bold={true}>Total</P>
					</Column>
					<Column align={'flex-end'}>
						<H4>{cart.summary.total}</H4>
					</Column>
				</Row>

				<Space />
				<View>
					<View style={{flexDirection:"row"}}>

						<Text style={{ fontSize: scale(15), color: "grey", paddingVertical: scale(10) }}>Frequently Bought Togther</Text>
					</View>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						{/* <View style={{ width: scale(320) }}> */}
						{this.state.featureProduct.map((item, index) => {
							return (

								<View style={{ width: scale(150), height: scale(140), backgroundColor: "#fefefe", borderRadius: scale(7), marginLeft: scale(7) }}>
									<View style={{ width: scale(150), height: scale(100), alignItems: "flex-start", flexDirection: "row" }}>
										<View style={{ width: scale(90), height: scale(90), justifyContent: "center", alignItems: 'center', paddingHorizontal: scale(5) }}>
											<Image source={require('../../assets/img/ourplant/andjelika.jpg')} style={{ width: scale(70), height: scale(70), resizeMode: "contain", }} />
										</View>

										<View style={{ width: scale(60), height: scale(90), justifyContent: "center", alignItems: 'flex-start', paddingHorizontal: scale(5) }}>
											<Text style={{ height: scale(70), fontSize: scale(13), }}>{item.name}</Text>
											<Text style={{ fontSize: scale(13), }}>$ 50 </Text>
										</View>
									</View>
									<View style={{ width: scale(150), height: scale(40), justifyContent: "center", alignItems: "center", }}>
										<Text style={{ color: "green", fontSize: scale(12) }}>Add</Text>

									</View>
								</View>
							)
						})}
					</ScrollView>

				</View>
				<Space />
				<View style={[{ width: 360, height: 60, flexDirection: "row", justifyContent: "flex-start", alignItems: "center", }, config.style.card]}>

					<View style={{ width: 40, height: 60, justifyContent: "center", alignItems: "center" }}>
						<Icon name="percent" style={{ fontSize: 20, color: "#808080", }} />
					</View>
					<View style={{ width: 280, height: 60, justifyContent: "center", alignItems: "flex-start" }}>
						<Text style={{ fontSize: 20, fontWeight: "bold", paddingHorizontal: 10, color: "#808080", letterSpacing: 1 }}>APPLY COUPON</Text>

					</View>
					<View style={{ width: 40, height: 60, justifyContent: "center", alignItems: "center" }}>
						<EntypoIcon name="chevron-right" style={{ fontSize: 30, padding: 5, color: "#808080", }} />

					</View>
				</View>
			</View>
		);
	}

	_renderContent() { }

	render() {

		const footer = (
			<Footer>
				<Btn
					label={'Checkout'}
					onPress={() => this.checkout()}
				/>
			</Footer>
		);

		return (

			<Wrapper footer={this.cartHasItems() ? footer : null}>
				<Header>
					<Left>
						<IconBtn icon={global.backIcon}
							onPress={() => this.props.navigation.goBack()}
							style={{ marginLeft: -10 }}
						/>
					</Left>
					<Right>
						<Touchable onPress={() => this.checkout()} style={config.style.iconBtn}>
							<P>Checkout</P>
						</Touchable>
					</Right>
				</Header>
				<Container>
					<H1>Cart</H1>
					{this.cartHasItems() ? this._renderCartContent() : this._renderNoItems()}
				</Container>
			</Wrapper>
		);
	}
}

const styles = StyleSheet.create({
	noItemsWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	noItemsHeading: {
		color: '#444444',
		fontSize: 20,
		marginTop: 10,
	},
	noItemsText: {
		color: '#666666',
		marginTop: 10,
		marginBottom: 15
	}
});