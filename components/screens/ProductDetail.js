import React, {useEffect, useRef, useState} from 'react';
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
  ActivityIndicator,
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
import {useDispatch, useSelector} from 'react-redux';
const {height, width} = Dimensions.get('window');

export default function ProductDetail(props) {
  const [quantity, setQuantity] = useState(1);
  const carousel = useRef(null);
  const dispatch = useDispatch();

  const isLoading = useSelector(
    (state) => state.loading.effects.product.getProductById,
  );
  const isAddtoCart = useSelector(
    (state) => state.loading.effects.cart.addToCart,
  ); 
  const allProducts = useSelector((state) => state.product.allProducts);
  const cart = useSelector((state) => state.cart.cartItem);
  const productDetails = useSelector((state) => state.product.productDetails);
  console.log(productDetails?.id);
  const token = useSelector((state) => state.session.token);
  useEffect(() => {
    dispatch.product.getProductById(props.route.params?.product?.id);
  }, []);

  const addToCart = () => {
    dispatch.cart.addToCart({
      data: {id: productDetails?.id, quantity: quantity},
      token,
    });
  };
  const shareProduct = () => {
    Share.share({
      message: 'Share Product (Message)',
      title: 'Share Product (Tittle)',
    });
  };

  const _renderGalleryItem = ({item, index}) => {
    return <Image source={{uri: item?.src}} style={styles.image} />;
  };
  const goToProduct = (item) => {
    props.navigation.navigate('ProductDetail', {product: item});
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
  return (
    <>
      <StatusBar
        color={config.primaryColor}
        barStyle={
          config.layoutMode == 'dark' ? 'light-content' : 'dark-content'
        }
      />
      {isLoading ? (
        <View
          style={{
            height: scale(height - 200),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator color={Colors.primary} size={'large'} />
        </View>
      ) : (
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{backgroundColor: '#fff'}}>
          {productDetails?.images && productDetails?.images.length > 0 ? (
            <Carousel
              ref={carousel}
              data={productDetails?.images}
              renderItem={_renderGalleryItem}
              sliderWidth={width}
              itemWidth={width}
            />
          ) : (
            <Image
              source={require('../../assets/img/placeholder_image-new.png')}
              style={styles.image}
            />
          )}

          <Space />

          <Container style={{borderTopWidth: 0.5, paddingTop: scale(10)}}>
            {/* <Row nomargin={true}>
        <Left>
          <Sm style={{ fontWeight: 'bold', color: '#cccccc' }}>{product?.sku.toUpperCase()}</Sm>
        </Left>
        <Right>
          <Sm style={{ color: '#00b0ed', fontWeight: 'bold' }}>{product?.brand_name}</Sm>
        </Right>
      </Row> */}
            <H3 style={{marginBottom: 10}}>{productDetails?.name}</H3>
            {/* <H6 style={{marginBottom: 10}}>{product?.description}</H6> */}
          </Container>
          <Container>
            {/* {product?.isEffect ? (
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
          ) : null} */}
            <Space />
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
                    }}
                    onPress={() => {
                      if (quantity > 1) setQuantity(quantity - 1);
                    }}>
                    <Text
                      style={{
                        fontSize: scale(15),
                        color: Colors.white,
                      }}>
                      -
                    </Text>
                  </Touchable>
                  <Text>{quantity}</Text>
                  <Touchable
                    style={{
                      height: scale(25),
                      width: scale(25),
                      paddingHorizontal: scale(9),
                      borderRadius: 5,
                      backgroundColor: Colors.primary,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => setQuantity(quantity + 1)}>
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
                  price={productDetails?.prices.price}
                  specialPrice={productDetails?.prices?.sale_price}
                />
              </Right>
            </Row>
            <Space />
            <Btn
              label={'ADD TO CART'}
              onPress={addToCart}
              isSpinner={isAddtoCart}
            />
            {/* <ListItem 
        icon={<Icon name={global.nextIcon} color={config.defaultFontColor} size={18} />} 
        onPress={
          () => this.props.navigation.navigate(
            'WebViewContent', {
              heading: 'Description', 
              content: product?.description
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
                content: product?.description
              }
            )
          }>
        <P style={{marginBottom: 0}}>Specification</P>
      </ListItem> */}
            <Space />
            <H4>Featured Items</H4>
            <Carousel
              data={allProducts ? allProducts : []}
              renderItem={_renderItem}
              sliderWidth={width - 30}
              itemWidth={(width - 30) * 0.33}
            />
            <Space />
            <Space />
          </Container>
        </ScrollView>
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
              onPress={() => props.navigation.goBack()}
            />
          </Left>
          <Right>
            <IconBtn icon={'share-2'} onPress={() => shareProduct()} />
            <IconBtn
              icon={'shopping-cart'}
              onPress={() => props.navigation.navigate('Cart')}
              badge={cart?.items?.length?cart.items.length:0}
            />
          </Right>
        </Row>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: height / 2 - 40,
    resizeMode: 'contain',
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
