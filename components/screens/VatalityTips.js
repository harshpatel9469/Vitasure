import config from '../../config';
import React, {Component, useState} from 'react';
import {scale} from 'react-native-size-matters';
import {
  Image,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
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
import {Colors} from '../Constant';
import Carousel from 'react-native-snap-carousel';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
function VatalityTips(props) {
  const [QA, setQA] = useState([
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
  const [activeSlide1, setActiveSlide1] = useState(0);
  const [value, setValue] = useState(1000);

  return (
    <View style={[style.mainContainer]}>
      {/* <StatusBar backgroundColor="#fff" barStyle="dark-content" /> */}
      <Header>
        <Left>
          <IconBtn
            icon={global.backIcon}
            onPress={() => props.navigation.goBack()}
            style={{marginLeft: -10, marginTop: scale(10)}}
          />
        </Left>
        <H3 style={{marginTop: scale(10)}}>Vatality Tips</H3>
        {/* <Right>
            <Touchable onPress={() => this.props.navigation.navigate('EditProfile')} style={{ padding: 5, }}>
              <P>Edit</P>
            </Touchable>
          </Right> */}
      </Header>
      <View style={[style.middle]}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: '100%'}}>
            <Text
              style={{
                fontSize: scale(18),
                color: Colors.darkGray,
                marginVertical: scale(5),
                paddingHorizontal: scale(10),
                fontWeight: 'bold',
              }}>
              Frequently Asked Questions
            </Text>
          </View>
          <FlatList
            data={QA}
            //   nestedScrollEnabled
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    borderColor: Colors.grey,
                    borderWidth: 3,
                    borderRadius: scale(5),
                    padding: scale(5),
                    width: scale(330),
                    marginVertical: scale(5),
                  }}
                  onPress={() => {
                    if (currentIndex == 0 || currentIndex !== index + 1)
                      setCurrentIndex(index + 1);
                    else
                    setCurrentIndex(0);
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: scale(5),
                    }}>
                    <Text style={{fontSize: scale(15), width: scale(290)}}>
                      {item.question}
                    </Text>
                    <EntypoIcon
                      name="chevron-down"
                      color={Colors.primary}
                      style={{paddingHorizontal: scale(5)}}
                      size={scale(15)}
                    />
                  </View>
                  {currentIndex == index + 1 ? (
                    <Text style={{fontSize: scale(14), color: 'gray'}}>
                      {item.ans}
                    </Text>
                  ) : null}
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f7f8fa',
  },
  middle: {
    width: responsiveWidth(100),
  },
  profileview: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: responsiveWidth(2.5),
  },
  subcon1: {justifyContent: 'center', alignItems: 'center'},
  subcon2: {paddingHorizontal: responsiveWidth(3)},

  iconview: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    borderRadius: responsiveWidth(20),
    backgroundColor: '#4b4b4b',
  },
});

const cstyle = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  profile: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
  },
  largerText: {
    fontSize: responsiveFontSize(5.5),
    fontFamily: 'SF-UI-Text-Regular',
  },
  enlarge: {fontSize: responsiveFontSize(8), fontFamily: 'SF-UI-Text-Regular'},
  largeText: {
    fontSize: responsiveFontSize(4.2),
    fontFamily: 'SF-UI-Text-Regular',
  },
  H1Text: {
    fontSize: responsiveFontSize(3),
  },
  regularFont: {
    fontFamily: 'SF-UI-Text-Regular',
  },
  mediumFont: {
    fontFamily: 'SF-UI-Text-Medium',
  },
  boldFont: {
    fontFamily: 'SF-UI-Text-Bold',
  },
  boldFontVery: {
    fontFamily: 'SF-UI-Text-BoldCondensed',
  },
  italicFont: {
    fontFamily: 'SF-UI-Text-Italic',
  },
  H2Text: {
    fontSize: responsiveFontSize(2.8),
  },
  H3Text: {
    fontSize: responsiveFontSize(2.6),
  },
  H4Text: {
    fontSize: responsiveFontSize(2.4),
  },
  H5Text: {
    fontSize: responsiveFontSize(2.2),
  },
  H6Text: {
    fontSize: responsiveFontSize(2),
  },
  H7Text: {
    fontSize: responsiveFontSize(1.8),
  },
  H8Text: {fontSize: responsiveFontSize(1.6)},
  smallText: {
    fontSize: responsiveFontSize(1.4),
  },
  smalltxt: {fontSize: responsiveFontSize(1.3)},
  leftAlign: {
    textAlign: 'left',
  },
  rightAlign: {
    textAlign: 'right',
  },
  centerAlign: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
  colorText: {
    color: '#FFF',
  },
  greyColorText: {
    color: '#8e8f91',
  },
  blackColorText: {
    color: '#444444',
  },
  blueColorText: {
    color: '#ffd428',
  },

  spinnerTextStyle: {
    color: '#FFF',
  },
  validationErrorMessage: {
    color: 'red',
  },
  margin: {margin: 10},
  marginVertical: responsiveHeight(10),
  smallPadder: {paddingHorizontal: responsiveWidth(2.5)},
  padder: {paddingHorizontal: responsiveWidth(5)},
  extraPadder: {paddingHorizontal: responsiveWidth(10)},
  extraPadding: {
    paddingHorizontal: responsiveWidth(10),
    paddingVertical: responsiveHeight(5),
  },
  padding: {
    paddingTop: responsiveHeight(4),
  },

  //Slider Component
  marginTop: {marginTop: responsiveHeight(10)},
  swipeContainer: {
    alignItems: 'center',
    height: responsiveHeight(85),
    width: responsiveWidth(100),
    alignContent: 'center',
  },
  sliderImageContainer: {
    height: responsiveHeight(60),
    width: responsiveWidth(100),
  },
  swiperItemImages: {
    width: responsiveWidth(56),
    height: responsiveWidth(56),
    borderRadius: responsiveWidth(28),
    marginBottom: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  sliderContent: {
    paddingTop: responsiveHeight(3),
    width: responsiveWidth(100),
    height: responsiveHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderfooter: {
    position: 'absolute',
    bottom: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    height: responsiveHeight(10),
  },

  //SideBar Component
  drawericon: {
    marginLeft: 20,
    width: responsiveWidth(20),
    height: responsiveWidth(20),
  },
  closebtn: {
    padding: 20,
  },
  iconFontSize: {
    fontSize: 26,
    width: responsiveWidth(10),
  },
  sidebarText: {
    //fontWeight: '400',
    marginLeft: 5,
  },
  signinText: {
    padding: 20,
  },
  drawerterms: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  sideBarFooter: {
    height: '15%',
    padding: 15,
    backgroundColor: '#fff',
  },
  privacytext: {
    fontSize: 14,
    fontFamily: 'Lato',
    padding: 10,
  },
  listitem: {
    flexDirection: 'row',
  },
  connectionerror: {
    position: 'absolute',
    top: responsiveHeight(65),
  },
  darkColorText: {
    color: '#111111',
  },
  grayColorText1: {
    color: '#666',
  },
});
export default VatalityTips;
