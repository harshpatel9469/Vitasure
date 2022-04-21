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
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import Carousel from 'react-native-snap-carousel';
import DropShadow from 'react-native-drop-shadow';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useRef, useState} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  Left,
  Right,
  Container,
  Row,
  Space,
  H3,
  Price,
  Btn,
  IconBtn,
  Touchable,
  FloatingLabelInput,
  H2,
} from '../utils';
import config from '../../config';
import {Colors} from '../Constant';
import ProductGridItem from '../reuse/ProductGridItem';

const {height, width} = Dimensions.get('window');

export default function ProductDetail(props) {
  const fnameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const carousel = useRef(null);

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [fullname, setFullname] = useState('');
  const [isShowHelp, setIsShowHelp] = useState(false);
  const [QA] = useState([
    {
      id: 1,
      question: 'What is a paragraph?',
      ans: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc.',
    },

    {
      id: 2,
      question: 'How do I decide what to put in a paragraph?',
      ans: 'Before you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. ',
    },
    {
      id: 3,
      question: 'How do I organize a paragraph?',
      ans: 'There are many different ways to organize a paragraph. The organization you choose will depend on the controlling idea of the paragraph.',
    },
    {
      id: 4,
      question: 'How do I decide what to put in a paragraph?',
      ans: 'Before you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. ',
    },
    {
      id: 5,
      question: 'How do I organize a paragraph?',
      ans: 'There are many different ways to organize a paragraph. The organization you choose will depend on the controlling idea of the paragraph.',
    },
    {
      id: 6,
      question: 'How do I organize a paragraph?',
      ans: 'There are many different ways to organize a paragraph. The organization you choose will depend on the controlling idea of the paragraph.',
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
            height: scale(height),
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
            <H4>FREQUENTLY ASKED QUESTIONS</H4>

            <FlatList
              data={QA}
              //   nestedScrollEnabled
              renderItem={({item, index}) => {
                return (
                  <DropShadow
                    style={{
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 2,
                        height: 4,
                      },
                      shadowOpacity: 0.1,
                      shadowRadius: 1,
                      elevation: 5,
                      marginHorizontal: scale(5),
                    }}>
                    <TouchableOpacity
                      style={{
                        borderColor: Colors.grey,
                        borderWidth: 1,
                        // borderRadius: scale(5),
                        padding: scale(5),
                        paddingVertical: scale(10),
                        width: '100%',
                        marginVertical: scale(5),
                        backgroundColor: '#fff',
                      }}
                      onPress={() => {
                        if (currentIndex == 0 || currentIndex !== index + 1)
                          setCurrentIndex(index + 1);
                        else setCurrentIndex(0);
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text
                          style={{
                            color:
                              currentIndex == index + 1
                                ? Colors.primary
                                : '#000',
                          }}>
                          {item.question}
                        </Text>
                        <View
                          style={{
                            backgroundColor:
                              currentIndex == index + 1
                                ? Colors.primary
                                : 'black',
                            borderRadius: scale(10),
                            padding: scale(2),
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          {currentIndex == index + 1 ? (
                            <EntypoIcon
                              name="minus"
                              color={Colors.white}
                              style={{fontWeight: '700 '}}
                              size={scale(15)}
                            />
                          ) : (
                            <EntypoIcon
                              name="plus"
                              color={Colors.white}
                              style={{fontWeight: '700 '}}
                              size={scale(15)}
                            />
                          )}
                        </View>
                      </View>
                      {currentIndex == index + 1 ? (
                        <Text>{item.ans}</Text>
                      ) : null}
                    </TouchableOpacity>
                  </DropShadow>
                );
              }}
            />
            <Space />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  borderWidth: 4,
                  borderColor: Colors.primary,
                  borderRadius: scale(20),
                  padding: scale(5),
                  alignItems: 'center',
                  width: scale(40),
                }}>
                <FontAwesome5Icon
                  name={'question'}
                  color={Colors.primary}
                  size={scale(20)}
                />
              </View>
              <Text
                style={{
                  fontSize: scale(20),
                  fontWeight: '700',
                  fontStyle: 'italic',
                  marginTop: scale(10),
                }}>
                Can't find an answer?
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.primary,
                  borderRadius: scale(20),
                  width: scale(150),
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: scale(5),
                  paddingVertical: scale(8),
                  marginVertical: scale(20),
                }}
                onPress={() => {
                  setIsShowHelp(true);
                }}>
                <Text style={{color: Colors.white, fontSize: scale(15)}}>
                  LET US HELP
                </Text>
              </TouchableOpacity>
            </View>
            <Space />
            <H4>Featured products</H4>
            <Carousel
              data={allProducts ? allProducts : []}
              renderItem={_renderItem}
              sliderWidth={width - 30}
              itemWidth={(width - 30) * 0.33}
            />
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
              badge={cart?.items?.length ? cart.items.length : 0}
            />
          </Right>
        </Row>
      </Container>

      <Modal animationType="slide" transparent={true} visible={isShowHelp}>
        <TouchableOpacity onPress={()=>{
          // setIsShowHelp(false)
       
        }}
        activeOpacity={1}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            flex: 1,
          }}>
          <View
            style={{
              backgroundColor: Colors.white,
              padding: scale(20),
              width: '80%',
              borderRadius: scale(8),
            }}>
            <KeyboardAwareScrollView>
              <Container>
                <H2>Contact Us</H2>

                <FloatingLabelInput
                  label="Your Name"
                  onChangeText={(text) => setFullname(text)}
                  returnKeyType={'next'}
                  value={fullname}
                  onSubmitEditing={() => {
                    fnameRef.current.focus();
                  }}
                />

                <FloatingLabelInput
                  label="Your Email"
                  onChangeText={(text) => setEmail(text)}
                  returnKeyType={'next'}
                  value={email}
                  ref={fnameRef}
                  onSubmitEditing={() => {
                    emailRef.current.focus();
                  }}
                />

                <FloatingLabelInput
                  label="Subject"
                  onChangeText={(text) => setSubject(text)}
                  returnKeyType={'next'}
                  value={subject}
                  ref={emailRef}
                  onSubmitEditing={() => {
                    subjectRef.current.focus();
                  }}
                />
                <FloatingLabelInput
                  label="Your Message (optional)"
                  onChangeText={(text) => setMessage(text)}
                  multiline={true}
                  value={message}
                  ref={subjectRef}
                  numberOfLines={4}
                  style={{height: scale(150)}}
                />

                <Space />

                <Btn label={'Submit'} onPress={() => {}} />
              </Container>
            </KeyboardAwareScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
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
