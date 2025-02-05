import React, {Component, useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import style from '../../style';
import {
  Wrapper,
  Left,
  Container,
  Header,
  H1,
  Right,
  IconBtn,
  Space,
  H4,
} from '../utils';
import sample_data from '../../sample_data';
import {CategoryCardItem} from '../reuse/CategoryCardItem';
import Carousel from 'react-native-snap-carousel';
import {CategoryGridItem} from '../reuse/CategoryGridItem';
import {CategoryBannerItem} from '../reuse/CategoryBannerItem';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import FontistoIcon from 'react-native-vector-icons/dist/Fontisto';
import {PersonCard} from '../reuse/PersonCard';
import LinearGradient from 'react-native-linear-gradient';
const {width} = Dimensions.get('window');
import {scale} from 'react-native-size-matters';
import ProductGridItem from '../reuse/ProductGridItem';
import {useDispatch, useSelector} from 'react-redux';
const CityPlaceHolder = {
  label: 'Select item',
  value: null,
  color: 'gray',
};

export default function CategoryListing(props) {
  const dispatch = useDispatch();
  const [mode, setMode] = useState('grid');
  const [personCategory, setPersonCategory] = useState([
    {id: 1, name: 'Him', image: require('../../assets/img/men-1.png')},
    {id: 2, name: 'Her', image: require('../../assets/img/female.png')},
    {
      id: 3,
      name: 'Newly Wed',
      image: require('../../assets/img/newly-weds.png'),
    },
    {id: 4, name: 'Kids', image: require('../../assets/img/children.png')},
  ]);
  const [plantDetails, setPlantDetails] = useState([
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
  ]);
  const allProducts = useSelector((state) => state.product.allProducts);
  // console.log(JSON.stringify(allProducts));
  const _keyCategoryExtractor = (item, index) => item.id;
  const goToCategory = (item) => {
    props.navigation.navigate('Products');
  };
  const goToProduct = (item) => {
    props.navigation.navigate('ProductDetail', {product: item});
  };
  const addToCart = () => {
    // console.log('add to cart');
  };

  const _renderItem = ({item, index}) => (
    <ProductGridItem
      key={item.id}
      onPress={goToProduct}
      addToCart={addToCart}
      item={item}
      cartInProgressItems={props.cartInProgressItems}
      showMessage={true} 
      showCartBtn={true}
      style={{maxWidth: width / 3, flex: 0.33}}
      layout={2}
    />
  );
  useEffect(() => {
    dispatch.product.getProducts();
  }, []);
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
          <IconBtn
            icon={'list'}
            onPress={
              () => {
                setMode('banner');
              }
              // this.setState({ mode: 'banner' })
            }
          />

          <IconBtn
            icon={'grid'}
            onPress={() => {
              setMode('grid');
            }}
            // this.setState({ mode: 'grid' })}
          />

          <IconBtn
            icon={'square'}
            onPress={() => {
              setMode('card');
            }}
            // this.setState({ mode: 'card' })}
          />
        </Right>
      </Header>

      <Container>
        {/* <H1>Shop</H1> */}
        <View>
          <Image
            source={{
              uri: 'http://intelvue.com/demo/app-template/light/1.png',
            }}
            style={{height: scale(120), width: scale(325), borderRadius: 10}}
          />
          <TouchableOpacity
            style={{
              width: 130,
              borderRadius: 5,
              position: 'absolute',
              left: 20,
              bottom: -10,
              backgroundColor: '#eb6199',
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
            activeOpacity={0}>
            <Text style={{color: '#fff', fontSize: 13, fontWeight: 'bold'}}>
              {' '}
              {'Start Collection'}
            </Text>
            <EntypoIcon
              name="chevron-right"
              style={{fontSize: 20, color: '#fff', top: 1}}
            />
          </TouchableOpacity>
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
            {personCategory.map((item, index) => {
              return (
                <PersonCard
                  item={item}
                  image={item.image}
                  Name={item.name}
                  style={{marginVertical: 3, marginHorizontal: 5}}
                />
              );
            })}
          </View>
        </ScrollView>
        <Space />
        <H4>Featured Items</H4>
        {/* {allProducts?.length ? ( */} 
          <Carousel
            data={allProducts?allProducts:[]}
            renderItem={_renderItem}
            sliderWidth={width - 30}
            itemWidth={(width - 30) * 0.33}
          /> 
        {/* ) : null} */}
        <Space />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            {plantDetails.map((item, index) => {
              return (
                <View
                  style={{
                    shadowOffset: {
                      width: 0,
                      height: 2.1,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 5.27,
                    elevation: 15,
                    marginHorizontal: 3,
                  }}
                  key={index}>
                  <LinearGradient
                    colors={['#eb6199', '#fff']}
                    style={{
                      width: 140,
                      height: 160,
                      borderRadius: 8,

                      alignItems: 'center',
                      padding: 8,
                    }}>
                    <Text style={{width: 120, fontSize: 18}} numberOfLines={2}>
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
        {/* 
        {
          this.state.mode == 'banner' ?
            <FlatList
              key={'banner-mode'}
              data={sample_data.categories}
              extraData={this.state}
              keyExtractor={this._keyCategoryExtractor}
              renderItem={(({ item }) => <CategoryBannerItem titlePosition={item.title_position} item={item} onPress={(item) => this.goToCategory(item)} style={{ marginBottom: 15 }} />)}
            /> : null
        }

        {
          this.state.mode == 'grid' ?
            <FlatList
              key={'grid-mode'}
              data={sample_data.brands}
              extraData={this.state}
              keyExtractor={this._keyCategoryExtractor}
              renderItem={(({ item }) => <CategoryGridItem imageStyle={{ width: (width - 70) / 2, height: (width - 70) / 2, resizeMode: 'contain' }} style={{ maxWidth: (width - 30) / 2, marginHorizontal: 2, flex: 0.5, padding: 15 }} item={item} onPress={(item) => this.goToCategory(item)} />)}
              numColumns={2}
            /> : null
        }

        {
          this.state.mode == 'card' ?
            <FlatList
              key={'card-mode'}
              data={sample_data.categories}
              extraData={this.state}
              keyExtractor={this._keyCategoryExtractor}
              renderItem={
                (({ item }) =>
                  <CategoryCardItem
                    style={{ marginHorizontal: 2, flex: 0.5, maxWidth: (width - 34) / 2, marginBottom: 10 }}
                    item={item}
                    imageStyle={{ width: '100%', height: (width - 34) / 2 }}
                    onPress={(item) => this.goToCategory(item)}
                  />
                )}
              numColumns={2}
            /> : null
        } */}
      </Container>
    </Wrapper>
  );
}
