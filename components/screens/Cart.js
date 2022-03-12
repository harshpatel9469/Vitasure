import React, {Component, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

import {CartItem} from '../reuse/CartItem';
import {
  Wrapper,
  Header,
  Left,
  Container,
  Right,
  Space,
  Row,
  Column,
  Touchable,
  H1,
  P,
  H4,
  Footer,
  Sm,
  Center,
  Btn,
  IconBtn,
} from '../utils';
import sample_data from '../../sample_data';
import config from '../../config';
import Icon from 'react-native-vector-icons/dist/Feather';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import {scale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../Constant';
const {height, width} = Dimensions.get('window');

export default function Cart(props) {
  const dispatch = useDispatch();
  const [_showQuantityModal, set_ShowQuantityModal] = useState('');
  const [curItem, setCurItem] = useState([]);
  const [cartInProgressItems, setCartInProgressItems] = useState([]);
  const isLoading = useSelector((state) => state.loading.models.cart);
  console.log(isLoading);
  const token = useSelector((state) => state.session.token);

  const cart = useSelector((state) => state.cart.cartItem);
  const [featureProduct, setFeatureProduct] = useState([
    {id: 1, name: 'pepsi'},
    {id: 2, name: 'cock'},
    {id: 3, name: 'pepsi-1'},
    {id: 4, name: 'cock-1'},
  ]);

  useEffect(() => {
    if (token) dispatch.cart.getCart(token);
    else props.navigation.navigate('Login');
  }, []);

  const showQuantityModal = (item) => {};

  const updateItemQty = (item) => {
    dispatch.cart.updateCart({
      data: {key: item.key, quantity: item.quantity + 1},
      token,
    });
  };

  const deleteItem = (item) => {
    if (item.quantity == 1) {
      dispatch.cart.removeItemCart({
        data: {key: item.key, quantity: item.quantity - 1},
        token,
      });
    } else
      dispatch.cart.updateCart({
        data: {key: item.key, quantity: item.quantity - 1},
        token,
      });
  };

  const checkout = () => {
    props.navigation.navigate('Address');
  };

  const updateCartData = (response) => {};

  const _keyExtractor = (item, index) => item.internalid;

  const _renderItem = ({item}) => (
    <CartItem
      key={item.key}
      deleteItem={deleteItem}
      updateItemQty={updateItemQty}
      showQuantityModal={showQuantityModal}
      item={item}
      style={{marginHorizontal: 2}}
    />
  );

  const _renderNoItems = () => {
    return (
      <Center flexDirection={'column'}>
        <Space />

        <Image
          source={require('../../assets/img/empty-cart.png')}
          style={{width: 200, height: 200, resizeMode: 'cover'}}
        />

        <H3>Oops!</H3>
        <Sm>Your cart is empty</Sm>
        <Space />
        <Btn
          label={'Continue Shopping'}
          onPress={() => props.navigation.navigate('Home')}
        />
      </Center>
    );
  };

  const _renderCartContent = () => {
    return (
      <View>
        <FlatList
          key={'cart-item'}
          data={cart?.items}
          keyExtractor={_keyExtractor}
          renderItem={_renderItem}
        />

        <Space height={10} />

        <Row>
          <Column>
            <P>Subtotal</P>
          </Column>
          <Column align={'flex-end'}>
            <P>{cart?.totals?.total_items}</P>
          </Column>
        </Row>

        <Space height={3} />

        <Row>
          <Column>
            <P>Tax Total</P>
          </Column>
          <Column align={'flex-end'}>
            <P>{cart?.totals?.total_tax}</P>
          </Column>
        </Row>

        <Space height={3} />

        <Row>
          <Column>
            <P>Shipping</P>
          </Column>
          <Column align={'flex-end'}>
            <P>{cart?.totals?.total_shipping}</P>
          </Column>
        </Row>

        <Space height={3} />

        <Row>
          <Column>
            <P bold={true}>Total</P>
          </Column>
          <Column align={'flex-end'}>
            <H4>{cart?.totals?.total_price}</H4>
          </Column>
        </Row>

        <Space />
      </View>
    );
  };
  const _renderContent = () => {};

  return (
    <Wrapper>
      <Header>
        <Left>
          <IconBtn
            icon={global.backIcon}
            onPress={() => props.navigation.goBack()}
            style={{marginLeft: -10}}
          />
        </Left>
        <Right>
          <Touchable onPress={() => checkout()} style={config.style.iconBtn}>
            <P>Checkout</P>
          </Touchable>
        </Right>
      </Header>

      <Container>
        <H1>Cart</H1>
        {isLoading ? (
          <View
            style={{
              height: scale(170),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator color={Colors.primary} size={'large'} />
          </View>
        ) : cart?.items?.length > 0 ? (
          _renderCartContent()
        ) : (
          _renderNoItems()
        )}
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: scale(15),
                color: 'grey',
                paddingVertical: scale(10),
              }}>
              Frequently Bought Togther
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* <View style={{ width: scale(320) }}> */}
            {featureProduct.map((item, index) => {
              return (
                <View
                  style={{
                    width: scale(150),
                    height: scale(140),
                    backgroundColor: '#fefefe',
                    borderRadius: scale(7),
                    marginLeft: scale(7),
                  }}>
                  <View
                    style={{
                      width: scale(150),
                      height: scale(100),
                      alignItems: 'flex-start',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: scale(90),
                        height: scale(90),
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: scale(5),
                      }}>
                      <Image
                        source={require('../../assets/img/ourplant/andjelika.jpg')}
                        style={{
                          width: scale(70),
                          height: scale(70),
                          resizeMode: 'contain',
                        }}
                      />
                    </View>

                    <View
                      style={{
                        width: scale(60),
                        height: scale(90),
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        paddingHorizontal: scale(5),
                      }}>
                      <Text style={{height: scale(70), fontSize: scale(13)}}>
                        {item.name}
                      </Text>
                      <Text style={{fontSize: scale(13)}}>$ 50 </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: scale(150),
                      height: scale(40),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'green', fontSize: scale(12)}}>
                      Add
                    </Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <Space />
        <View
          style={[
            {
              width: '100%',
              height: 60,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            },
            config.style.card,
          ]}>
          <View
            style={{
              width: 40,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="percent" style={{fontSize: 20, color: '#808080'}} />
          </View>
          <View
            style={{
              width: 280,
              height: 60,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                paddingHorizontal: 10,
                color: '#808080',
                letterSpacing: 1,
              }}>
              APPLY COUPON
            </Text>
          </View>
          <View
            style={{
              width: 40,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <EntypoIcon
              name="chevron-right"
              style={{fontSize: 30, padding: 5, color: '#808080'}}
            />
          </View>
        </View>
        <Btn
          label={'Checkout'}
          onPress={() => checkout()}
          style={{width: '100%', marginVertical: scale(15)}}
        />
      </Container>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  noItemsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  noItemsHeading: {
    color: '#444444',
    fontSize: 20,
    marginTop: 10,
  },
  noItemsText: {
    color: '#666666',
    marginTop: 10,
    marginBottom: 15,
  },
});
