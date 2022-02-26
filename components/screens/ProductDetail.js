import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Share,
  Dimensions,
  Platform,
  View,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Feather';
import config from '../../config';
import {
  Header,
  Wrapper,
  Left,
  Right,
  Container,
  Row,
  Space,
  ListItem,
  P,
  H3,
  Sm,
  Price,
  StarRating,
  Btn,
  IconBtn,
  H6,
  Touchable,
} from '../utils';
import Carousel from 'react-native-snap-carousel';
import sample_data from '../../sample_data';
import {scale} from 'react-native-size-matters';
import ProductGridItem from '../reuse/ProductGridItem';
import {Colors} from '../Constant';
const {height, width} = Dimensions.get('window');

export default class ProductDetail extends React.Component {
  state = {
    favoriteLoading: false,
    selectedFilters: {},
  };

  constructor(props) {
    super(props);
    this.state.product = this.props.route.params.product;
  }

  addToCart() {}

  shareProduct() {
    Share.share({
      message: 'Share Product (Message)',
      title: 'Share Product (Tittle)',
    });
  }

  _renderGalleryItem = (imageUrl) => {
    return <Image source={{uri: imageUrl.item}} style={styles.image} />;
  };
  goToProduct(item) {
    this.props.navigation.navigate('ProductDetail', {product: item});
  }
  _renderItem = ({item, index}) => (
    <ProductGridItem
      key={item.id}
      onPress={this.goToProduct.bind(this)}
      addToCart={this.addToCart.bind(this)}
      item={item}
      cartInProgressItems={this.props.cartInProgressItems}
      showMessage={true}
      showCartBtn={true}
      style={{maxWidth: width / 3, flex: 0.33}}
      layout={2}
    />
  );
  renderLayout2() {
    return (
      <>
        <StatusBar
          color={config.primaryColor}
          barStyle={
            config.layoutMode == 'dark' ? 'light-content' : 'dark-content'
          }
        />
        <ScrollView style={{flex: 1}} style={{backgroundColor: '#fff'}}>
          {this.state.product.images && this.state.product.images.length > 0 ? (
            <Carousel
              ref={(c) => {
                this._carousel = c;
              }}
              data={this.state.product.images}
              renderItem={this._renderGalleryItem}
              sliderWidth={width}
              itemWidth={width}
            />
          ) : (
            <Image
              source={require('../../assets/img/placeholder_image-new.png')}
              style={styles.image}
            />
          )}

          <Container
            style={{
              position: 'absolute',
              top: Platform.OS == 'ios' ? 40 : 10,
              left: 0,
              width: '98%',
            }}>
            <Row>
              <Left>
                <IconBtn
                  icon={global.backIcon}
                  onPress={() => this.props.navigation.goBack()}
                />
              </Left>
              <Right>
                <IconBtn icon={'share-2'} onPress={() => this.shareProduct()} />
                <IconBtn
                  icon={'shopping-cart'}
                  onPress={() => this.props.navigation.navigate('Cart')}
                  badge={2}
                />
              </Right>
            </Row>
          </Container>

          <Space />

          <Container style={{borderTopWidth: 0.5, paddingTop: scale(10)}}>
            {/* <Row nomargin={true}>
						<Left>
							<Sm style={{ fontWeight: 'bold', color: '#cccccc' }}>{this.state.product.sku.toUpperCase()}</Sm>
						</Left>
						<Right>
							<Sm style={{ color: '#00b0ed', fontWeight: 'bold' }}>{this.state.product.brand_name}</Sm>
						</Right>
					</Row> */}
            <H3 style={{marginBottom: 10}}>{this.state.product.name}</H3>
            <H6 style={{marginBottom: 10}}>{this.state.product.description}</H6>
          </Container>
          <Container>
            {this.state.product.isEffect ? (
              <View>
                <View style={styles.effectView}>
                  <Image
                    source={{
                      uri: 'https://cdn.nuawoman.com/global/img/uplift-drink-big-otb/Uplift-Icon-01.webp',
                    }}
                    style={styles.effectImage}
                  />
                  <P>Reduces fatigue, bloating and breast tenderness</P>
                </View>
                <View style={styles.effectView}>
                  <Image
                    source={{
                      uri: 'https://cdn.nuawoman.com/global/img/uplift-drink-big-otb/Uplift-Icon-02.webp',
                    }}
                    style={styles.effectImage}
                  />
                  <P>Improves gut health and low moods</P>
                </View>
                <View style={styles.effectView}>
                  <Image
                    source={{
                      uri: 'https://cdn.nuawoman.com/global/img/uplift-drink-big-otb/Uplift-Icon-03.webp',
                    }}
                    style={styles.effectImage}
                  />
                  <P>No added sugar or preservatives</P>
                </View>
                <View style={styles.effectView}>
                  <Image
                    source={{
                      uri: 'https://cdn.nuawoman.com/global/img/uplift-drink-big-otb/Uplift-Icon-04.webp',
                    }}
                    style={styles.effectImage}
                  />
                  <P>1 sachet a day for 5 days of your period</P>
                </View>
              </View>
            ) : null}
            <Space />
            {/* <H4>Colors</H4>

					<SelectableList 
						onSelect={(item) => this.setState(
							{selectedFilters: 
								{
									...this.state.selectedFilters, 
									...{color: item.id}
								}
							}
						)}
						isSelected={(item) => this.state.selectedFilters.color == item.id}
						items={sample_data.filters.colors}
					/>

					<Space /> */}
            <Row nomargin={true}>
              <Left flexDirection={'row'}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    width: scale(80),
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Touchable
                    style={{
                      height: scale(25),
                      width: scale(25),
                      paddingHorizontal: scale(9),
                      borderRadius: 5,
                      backgroundColor: Colors.primary,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: scale(15),
                        color: Colors.white,
                      }}>
                      -
                    </Text>
                  </Touchable>
                  <Text>1</Text>
                  <Touchable
                    style={{
                      height: scale(25),
                      width: scale(25),
                      paddingHorizontal: scale(9),
                      borderRadius: 5,
                      backgroundColor: Colors.primary,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: scale(15),
                        color: Colors.white,
                      }}>
                      +
                    </Text>
                  </Touchable>
                </View>
              </Left>
              <Right>
                <Price
                  style={{color: '#c30000', fontWeight: 'bold', fontSize: 24}}
                  price={this.state.product.price}
                  specialPrice={this.state.product.special_price}
                />
              </Right>
            </Row>
            <Space />
            <Btn label={'ADD TO CART'} />
            {/* <ListItem 
						icon={<Icon name={global.nextIcon} color={config.defaultFontColor} size={18} />} 
						onPress={
							() => this.props.navigation.navigate(
								'WebViewContent', {
									heading: 'Description', 
									content: this.state.product.description
									}
								)
							}>
						<P style={{marginBottom: 0}}>Description</P>
					</ListItem>

					<ListItem 
						icon={<Icon name={global.nextIcon} color={config.defaultFontColor} size={18} />} 
						onPress={
							() => this.props.navigation.navigate(
								'WebViewContent', {
										heading: 'Description', 
										content: this.state.product.description
									}
								)
							}>
						<P style={{marginBottom: 0}}>Specification</P>
					</ListItem> */}
            <Space />
            <H4>Featured Items</H4>
            <Carousel
              ref={(c) => {
                this._carousel = c;
              }}
              data={sample_data.items}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={(width - 30) * 0.33}
            />
            <Space />
            <Space />
          </Container>
        </ScrollView>
      </>
    );
  }

  renderLayout1() {
    return (
      <Wrapper>
        <Header>
          <Left>
            <IconBtn
              icon={global.backIcon}
              onPress={() => this.props.navigation.goBack()}
              style={{marginLeft: -10}}
            />
          </Left>
          <Right>
            <IconBtn icon={'share-2'} onPress={() => this.shareProduct()} />
            <IconBtn
              icon={'shopping-cart'}
              onPress={() => this.props.navigation.navigate('Cart')}
              badge={2}
            />
          </Right>
        </Header>

        <Container>
          <H3 style={{marginBottom: 10}}>{this.state.product.name}</H3>
          <Row nomargin={true}>
            <Left>
              <Sm style={{fontWeight: 'bold', color: '#cccccc'}}>
                {this.state.product.sku.toUpperCase()}
              </Sm>
            </Left>
            <Right>
              <Sm style={{color: '#00b0ed', fontWeight: 'bold'}}>
                {this.state.product.brand_name}
              </Sm>
            </Right>
          </Row>
          <Space />
        </Container>

        {this.state.product.images && this.state.product.images.length > 0 ? (
          <Carousel
            ref={(c) => {
              this._carousel = c;
            }}
            data={this.state.product.images}
            renderItem={this._renderGalleryItem}
            sliderWidth={width}
            itemWidth={width}
          />
        ) : (
          <Image
            source={require('../../assets/img/placeholder_image-new.png')}
            style={styles.image}
          />
        )}

        <Container>
          <Space />

          <Row nomargin={true}>
            <Left flexDirection={'column'}>
              <StarRating rating={this.state.product.rating} />
              <P style={{color: 'green'}}>In Stock</P>
            </Left>
            <Right>
              <Price
                style={{color: '#c30000', fontWeight: 'bold', fontSize: 24}}
                price={this.state.product.price}
                specialPrice={this.state.product.special_price}
              />
            </Right>
          </Row>

          <Space />

          <ListItem
            icon={
              <Icon
                name={global.nextIcon}
                color={config.defaultFontColor}
                size={18}
              />
            }
            onPress={() =>
              this.props.navigation.navigate('WebViewContent', {
                heading: 'Description',
                content: this.state.product.description,
              })
            }>
            <P style={{marginBottom: 0}}>Description</P>
          </ListItem>

          <ListItem
            icon={
              <Icon
                name={global.nextIcon}
                color={config.defaultFontColor}
                size={18}
              />
            }
            onPress={() =>
              this.props.navigation.navigate('WebViewContent', {
                heading: 'Description',
                content: this.state.product.description,
              })
            }>
            <P style={{marginBottom: 0}}>Specification</P>
          </ListItem>

          <Space />

          <Btn label={'ADD TO CART'} />
          <Space />
          <Space />
        </Container>
      </Wrapper>
    );
  }

  render() {
    return config.productDetailLayout == 'layout2'
      ? this.renderLayout1()
      : this.renderLayout2();
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: height / 2 - 40,
    resizeMode: 'cover',
  },
  skuLine: {
    flexDirection: 'row',
  },
  skuLeft: {
    flex: 0.5,
  },
  skuRight: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
  iconButton: {
    height: 40,
    width: 40,
    backgroundColor: 'pink',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  effectView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(5),
    marginVertical: scale(5),
  },
  effectImage: {
    height: scale(40),
    width: scale(40),
    resizeMode: 'contain',
    marginEnd: scale(10),
  },
});
