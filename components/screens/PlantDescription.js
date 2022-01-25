import React from 'react';
import {
	View,
	FlatList,
	StyleSheet,
	Image,
	Text,
	ScrollView,
	TouchableOpacity
} from 'react-native';

import { CartItem } from '../reuse/CartItem';
import { Wrapper, Header, Left, Container, Right, Space, Row, Column, Touchable, H1, P, H4, Footer, Sm, Center, Btn, IconBtn } from '../utils';
import sample_data from '../../sample_data';
import config from '../../config';
// import { Icon } from 'react-native-vector-icons/icon';
import Icon from 'react-native-vector-icons/dist/Feather';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import { scale } from 'react-native-size-matters';


export default class PlantDescription extends React.Component {
constructor(props){
	super(props)
	this.state={

	}
}
 

	render() { 
let item= this.props.route.params.details
		return (

			<View style={{ backgroundColor: "#fff", flex: 1 }}>
				{/* <Header> */}
				<View style={{ flexDirection: "row", }}>
					<View style={{ width: scale(30) }}>
						<IconBtn icon={global.backIcon}
							onPress={() => this.props.navigation.goBack()}
						/>
					</View>
					<View style={{ width: scale(300), justifyContent: "center", alignItems: "center" }}>
						<Text style={{ fontSize: scale(20) }}>{item.name}</Text>

					</View>
				</View>

				{/* </Header> */}
				<Space /> 
				<ScrollView>
				<View style={{justifyContent:"center",alignItems:"center"}}>

					<View onPress={() => {
						// this.props.navigation.navigate("PlantDescription")
					}}
						style={[{   padding: scale(15), justifyContent: "center", alignItems: "center", borderRadius: scale(120) },]}>
						<Image source={item.image} style={{ width: scale(230), height: scale(230), resizeMode: "contain" }} />
						<Text style={{fontSize:scale(18),fontWeight:"normal"}}>{item.subName}</Text> 
					</View>
					<View style={{justifyContent:"center",alignItems:"center", width:scale(320)}}>
						<Text style={{flexWrap:"wrap",fontSize:scale(15)}}> 
						{item. Description}</Text>

					</View>
				</View>
				<Space /> 

				</ScrollView>
			</View>
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