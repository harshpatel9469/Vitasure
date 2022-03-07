import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  Modal,
  ScrollView,
  Alert,
  StatusBar,
} from 'react-native';

import ProductGridItem from '../reuse/ProductGridItem';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import {PersonCard} from '../reuse/PersonCard';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../config';
import style from '../../style';
import sample_data from '../../sample_data';
import {
  Wrapper,
  Header,
  Left,
  Right,
  Container,
  Space,
  ImageCard,
  H4,
  IconBtn,
} from '../utils';
import {scale} from 'react-native-size-matters';
import {connect} from 'react-redux';

const {width} = Dimensions.get('window');
const stylesnew = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisibleLocation: false,
      personCategory: [
        {id: 1, name: 'Him', image: require('../../assets/img/men-1.png')},
        {id: 2, name: 'Her', image: require('../../assets/img/female.png')},
        {
          id: 3,
          name: 'Newly Wed',
          image: require('../../assets/img/newly-weds.png'),
        },
        {id: 4, name: 'Kids', image: require('../../assets/img/children.png')},
      ],
      plantDetails: [
        {
          id: 1,
          plant: 'Our Plant separate page',
          discount: 'flat 15% discount',
        },
        {id: 2, plant: 'Vatality Tips', discount: 'flat 30% discount'},
        {
          id: 3,
          plant: 'Our Plant separate page',
          discount: 'flat 45% discount',
        },
      ],
      activeSlide: 0,
      activeSlide1: 0,
    };
  }

  _keyExtractor = (item, index) => item.id;
  _keyCategoryExtractor = (item, index) => item.id;

  state = {
    loaderText: '',
    cartLoading: false,
    showOutOfStockModal: false,
    outOfStockMessage: '',
    categories: [],
    brands: [],
    featuredProducts: [],
    favoriteProducts: [],
  };
  componentDidMount() {
    this.props.getProduct();
console.log(this.props,"----------");

  }
  goToProduct(item) {
    this.props.navigation.navigate('ProductDetail', {product: item});
  }

  goToCategory(item) {
    this.props.navigation.navigate('CategoryListing', {
      heading: item.name,
      categoryPath: item.fullurl,
    });
  }

  addToCart() {
    console.log('add to cart');
  }

  _renderItem = ({item, index}) => (
    <ProductGridItem
      key={index}
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

  _renderItem2 = ({item, index}) => (
    <ProductGridItem
      key={index}
      onPress={this.goToProduct.bind(this)}
      addToCart={this.addToCart.bind(this)}
      item={item}
      cartInProgressItems={this.props.cartInProgressItems}
      showMessage={true}
      showCartBtn={true}
      style={{maxWidth: width / 2, flex: 0.5}}
      layout={1}
    />
  );

  _renderBrandItem = ({item}) => {
    const col = 4;
    return (
      <ImageCard
        margin={5}
        padding={15}
        imageWidth={(width - 15) / col - 42}
        onPress={() => this.props.navigation.navigate('Shop')}
        source={{uri: item.image}}
      />
    );
  };

  doSearch() {
    if (this.state.q == '' || !this.state.q) {
      return;
    }

    console.log('search ...');
  }

  _renderCarouselItem = ({item, index}) => {
    return (
      <TouchableOpacity style={config.style.cardShadow}>
        <Image
          source={{uri: item.image}}
          style={{
            width: '100%',
            height: 180,
            resizeMode: 'cover',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        />
      </TouchableOpacity>
    );
  };
  
 
  render() {
    return (
      <Wrapper>
        <View style={{backgroundColor: '#e7abc3'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: scale(10),
              paddingBottom: scale(5),
              paddingLeft: scale(15),
              paddingRight: scale(15),
            }}>
            {/* <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
							 <Image
								source={require('../../assets/img/vita1.png')}
								style={{
									width: scale(30),
									height: scale(30),
									marginTop: scale(-5),
								}}
								resizeMode="cover"
							/> 
						 <Image
								source={require('../../assets/img/vita2.png')}
								style={{ width: scale(100), height: scale(30) }}
								resizeMode="cover"
							/> 
						</View> */}
            <View
              style={{
                flexDirection: 'row',
                // paddingLeft: scale(15),
                paddingRight: scale(15),
                paddingBottom: scale(5),
              }}>
              <Text style={{flexDirection: 'row', color: '#666666'}}>
                Deliver To
              </Text>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => {
                  this.setState({isVisibleLocation: true});
                }}>
                <Text
                  style={{fontWeight: 'bold', paddingLeft: 5, paddingRight: 2}}>
                  Deliver To
                </Text>
                <Icon1 name="angle-down" size={24} color="#54525D" />
              </TouchableOpacity>
            </View>

            <View>
              <IconBtn
                icon={'shopping-cart'}
                onPress={() => this.props.navigation.navigate('Cart')}
                badge={2}
              />
            </View>
          </View>
          <View
            style={[
              config.style.formField,
              {
                marginBottom: 0,
                flex: 1,
                paddingLeft: scale(15),
                paddingRight: scale(15),
                paddingBottom: scale(10),
              },
            ]}>
            <View>
              <TextInput
                placeholderTextColor={'#999999'}
                style={config.style.formInput2}
                onChangeText={(text) => this.setState({q: text})}
                placeholder={'Search products'}
                value={this.state.q}
                onSubmitEditing={() => {
                  this.doSearch();
                }}
                underlineColorAndroid={'transparent'}
              />

              <TouchableOpacity
                onPress={() => this.doSearch()}
                style={{position: 'absolute', right: 15, bottom: 11}}>
                <Icon name={'magnifier'} size={18} color={'#bcbcbc'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Header style={{marginBottom: 20, width: '100%'}} />

        <Container>
          <View>
            <Carousel
              data={sample_data.homeBanner}
              renderItem={this._renderCarouselItem}
              sliderWidth={width - 30}
              itemWidth={width - 30}
              onSnapToItem={(index) => this.setState({activeSlide: index})}
            />
            <Pagination
              dotsLength={sample_data.homeBanner.length}
              activeDotIndex={this.state.activeSlide}
              containerStyle={{
                position: 'absolute',
                bottom: -25,
                left: scale(80),
              }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: '#e7abc3',
              }}
              inactiveDotStyle={{
                backgroundColor: '#fff',
              }}
              inactiveDotOpacity={1}
              inactiveDotScale={0.6}
            />
          </View>
          <Space />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                width: '100%',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              {this.state.personCategory.map((item, index) => {
                return (
                  <PersonCard
                    item={item}
                    key={index}
                    image={item.image}
                    Name={item.name}
                    style={{marginVertical: 3, marginHorizontal: 5}}
                  />
                );
              })}
            </View>
          </ScrollView>
          {/* <FlatList
            contentContainerStyle={{marginHorizontal: -5}}
            data={sample_data.brands}
            extraData={this.state}
            horizontal={true}
            keyExtractor={this._keyCategoryExtractor}
            renderItem={this._renderBrandItem}
            showsHorizontalScrollIndicator={false}
            key={'brands'}
          /> */}

          <Space />
          <View>
            <Image
              source={{
                uri: 'http://intelvue.com/demo/app-template/light/1.png',
              }}
              style={{
                height: scale(150),
                width: scale(325),
                borderRadius: 10,
                resizeMode: 'cover',
              }}
            />
            <TouchableOpacity
              style={{
                width: 130,
                borderRadius: 5,
                position: 'absolute',
                left: 20,
                bottom: -10,
                backgroundColor: '#e7abc3',
                shadowColor: '#999',
                shadowOffset: {
                  width: 0,
                  height: 2.5,
                },
                shadowOpacity: 0.5,
                shadowRadius: 5.27,
                elevation: 2,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                padding: 4,
              }}
              onPress={() => this.props.navigation.navigate('Membership')}
              activeOpacity={0}>
              <Text style={{color: '#fff', fontSize: 13, fontWeight: 'bold'}}>
                {'Start Collection'}
              </Text>
              <EntypoIcon
                name="chevron-right"
                style={{fontSize: 20, color: '#fff', top: 1}}
              />
            </TouchableOpacity>
          </View>
          <Space />
          <View>
            <Carousel
              data={sample_data.homeBanner}
              renderItem={this._renderCarouselItem}
              sliderWidth={width - 30}
              itemWidth={width - 30}
              onSnapToItem={(index) => this.setState({activeSlide1: index})}
            />
            <Pagination
              dotsLength={sample_data.homeBanner.length}
              activeDotIndex={this.state.activeSlide1}
              containerStyle={{
                position: 'absolute',
                bottom: -25,
                left: 100,
              }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: '#e7abc3',
              }}
              inactiveDotStyle={{
                backgroundColor: '#fff',
              }}
              inactiveDotOpacity={1}
              inactiveDotScale={0.6}
            />
          </View>
          <Space />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              {this.state.plantDetails.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      shadowOffset: {
                        width: 0,
                        height: 2.1,
                      },
                      shadowOpacity: 1,
                      shadowRadius: 5.27,
                      elevation: 15,
                      marginHorizontal: 3,
                    }}>
                    <LinearGradient
                      colors={['#e7abc3', '#fff']}
                      style={{
                        width: 140,
                        height: 160,
                        borderRadius: 8,

                        alignItems: 'center',
                        padding: 8,
                      }}>
                      <Text
                        style={{width: 120, fontSize: 18}}
                        numberOfLines={2}>
                        {item.plant}
                      </Text>
                      <Text
                        numberOfLines={2}
                        style={{
                          width: 120,
                          fontSize: 15,
                          color: '#FA8072',
                          textTransform: 'uppercase',
                        }}>
                        {item.discount}
                      </Text>
                      <TouchableOpacity
                        style={{
                          borderRadius: 15,
                          justifyContent: 'center',
                          alignItems: 'center',
                          position: 'absolute',
                          bottom: 8,
                          left: 10,
                          backgroundColor: '#F2E34C',
                        }}
                        onPress={() => {
                          this.props.navigation.navigate('OurPlant');
                        }}>
                        <EntypoIcon
                          name="chevron-right"
                          style={{fontSize: 22, padding: 1, color: '#808080'}}
                        />
                      </TouchableOpacity>
                    </LinearGradient>
                  </View>
                );
              })}
            </View>
          </ScrollView>
          <Space />
          {/* <H4>Featured Items</H4>

          <Carousel
            ref={(c) => {
              this._carousel = c;
            }}
            data={sample_data.items}
            renderItem={this._renderItem}
            sliderWidth={width - 30}
            itemWidth={(width - 30) * 0.33}
          />

          <Space />

          <H4>Favorite Items</H4>

          <Carousel
            data={sample_data.items}
            renderItem={this._renderItem2}
            sliderWidth={width - 30}
            itemWidth={(width - 30) * 0.5}
          /> */}
        </Container>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Modal
            style={{
              backgroundColor: 'red',
              width: '100%',
              height: '100%',
            }}
            animationType="slide"
            transparent={true}
            visible={this.state.isVisibleLocation}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              this.setState({isVisibleLocation: false});
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(52, 52, 52, 0.5)',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  margin: 20,
                  height: '80%',
                  width: '90%',
                  backgroundColor: 'white',
                  borderRadius: 20,
                  padding: 35,

                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: '#4A535A',
                        fontSize: scale(24),
                        fontWeight: 'bold',
                      }}>
                      Choose Your
                    </Text>
                    <Text
                      style={{
                        color: '#4A535A',
                        fontSize: scale(24),
                        fontWeight: 'bold',
                      }}>
                      Location
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => this.setState({isVisibleLocation: false})}>
                      <Icon1 name="close" size={28} color="#8997A2" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: scale(20),
                    marginBottom: scale(10),
                  }}>
                  <View style={{flex: 0.7}}>
                    <TextInput
                      placeholderTextColor={'#999999'}
                      style={{
                        borderWidth: 1,
                        borderColor: '#D82B7F',
                        padding: scale(5),
                      }}
                      onChangeText={(text) => this.setState({q: text})}
                      placeholder={'Search products'}
                      value={this.state.q}
                      onSubmitEditing={() => {
                        this.doSearch();
                      }}
                      underlineColorAndroid={'transparent'}
                    />
                  </View>
                  <View
                    style={{
                      flex: 0.3,
                      backgroundColor: '#D82B7F',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => this.doSearch()}
                      style={{padding: scale(10)}}>
                      <Text style={{color: '#fff', textAlign: 'center'}}>
                        Check
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon2 name="my-location" size={24} color="#D82B7F" />
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#D82B7F',
                      paddingHorizontal: scale(5),
                    }}>
                    Select Current Location
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#E7E9EB',
                    position: 'absolute',
                    bottom: scale(15),
                    padding: scale(10),

                    borderRadius: 6,
                    marginLeft: 25,
                    width: scale(260),
                  }}>
                  <Icon1 name="home" size={24} color="#D82B7F" />
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#333',
                      paddingHorizontal: scale(5),
                    }}>
                    Login to View Addresses
                  </Text>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </Wrapper>
    );
  }
}
export default connect(
  (state) => ({
    allProducts: state.product?.allProduct,
  }),
  (dispatch) => ({
    getProduct: dispatch.product.getProducts,
  }),
)(Home);
const styles = StyleSheet.create(style.home);
