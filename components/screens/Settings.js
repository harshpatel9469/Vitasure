import config from '../../config';
import React, {Component, useEffect} from 'react';
import {scale} from 'react-native-size-matters';
import {
  Image,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  StyleSheet,
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
  Colors,
  Footer,
  Sm,
  Center,
  Btn,
  IconBtn,
} from '../utils';

import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/Feather';
import {useDispatch, useSelector} from 'react-redux';

export default function Settings(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const userDetails = useSelector((state) => state.session.userDetails);
  const token = useSelector((state) => state.session.token);
  console.log(token);
  useEffect(() => {
    if (token) {
      dispatch.session.getProfile(token);
    }
  }, []);
  return (
    <View style={[style.mainContainer]}>
      <View style={[cstyle.topprofiletopbg]}>
        <Image
          source={require('../../assets/img/prifilebg.png')}
          style={{height: scale(250), width: scale(350)}}
        />
      </View>
      {/* <StatusBar backgroundColor="#fff" barStyle="dark-content" /> */}
      <Header>
        <Left>
          <IconBtn
            icon={global.backIcon}
            color="#fff"
            onPress={() => props.navigation.goBack()}
            style={{marginLeft: 0, color: '#fff',top:scale(10)}}
          />
        </Left>
        <H1 style={{color: '#ffffff', fontSize: scale(18), marginTop: 15}}>
          Profile
        </H1>
        {/* <Right>
            <Touchable onPress={() => this.props.navigation.navigate('EditProfile')} style={{ padding: 5, }}>
              <P>Edit</P>
            </Touchable>
          </Right> style={{ backgroundColor: "#fff" }} */}
      </Header>
      <View style={[style.middle]}>
        <ScrollView>
          <View style={[cstyle.topprofilebg]}>
            <TouchableOpacity style={[style.profileview]}>
              <View style={[style.subcon1]}>
                <View style={[style.iconview]}>
                  {user?.avatar ? (
                    <Image
                      source={{uri: user?.avatar}}
                      style={[style.iconview, {resizeMode: 'cover'}]}
                    />
                  ) : null}
                </View>
              </View>

              <View style={[style.subcon2]}>
                <Text
                  style={[
                    cstyle.centerAlign,
                    cstyle.darkColorText,
                    cstyle.boldFont,
                    cstyle.H5Text,
                  ]}>
                  {userDetails?.name}
                </Text>
                <Text
                  style={[
                    cstyle.centerAlign,
                    cstyle.regularFont,
                    cstyle.H6Text,
                    cstyle.greyColorText,
                  ]}>
                  Reward Points
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#f7f8fa', paddingHorizontal: 15}}>
            {/* <View style={{ backgroundColor: "#f7f8fa", padding: responsiveWidth(2) }}>
                <Text style={[cstyle.H5Text, cstyle.boldFont, { color: "#d2d5dd" }]}>INFORMATION</Text>
              </View> */}
            {/* <View style={{ backgroundColor: "#fff", paddingHorizontal: responsiveWidth(2), borderBottomWidth: 0.5, borderBottomColor: "#c6c6c6" }}>
               
                <TouchableOpacity style={{ flexDirection: "row", ustifyContent: "space-between", borderBottomWidth: 0.5, borderBottomColor: "#c6c6c6", paddingVertical: responsiveHeight(1.5) }}>
                  <View style={{ flex: 0.38, justifyContent: "center", }}>
                    <Text style={[cstyle.boldFont, cstyle.H7Text]}>Username</Text>
                  </View>
                  <TouchableOpacity style={{ flex: 0.54, alignItems: "flex-end", paddingHorizontal: responsiveWidth(1) }}>
                    <Text style={[cstyle.boldFont, cstyle.H7Text, cstyle.greyColorText]}>{this.state.driverName}</Text>
                  </TouchableOpacity>

                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", ustifyContent: "space-between", borderBottomWidth: 0.5, borderBottomColor: "#c6c6c6", paddingVertical: responsiveHeight(1.5) }}>
                  <View style={{ flex: 0.38, justifyContent: "center", }}>
                    <Text style={[cstyle.boldFont, cstyle.H7Text]}>Phone number</Text>
                  </View>
                  <TouchableOpacity style={{ flex: 0.54, alignItems: "flex-end", paddingHorizontal: responsiveWidth(1) }}>
                    <Text style={[cstyle.boldFont, cstyle.H7Text, cstyle.greyColorText]}>{this.state.driverPhone}</Text>
                  </TouchableOpacity>

                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", ustifyContent: "space-between", borderBottomWidth: 0.5, borderBottomColor: "#c6c6c6", paddingVertical: responsiveHeight(1.5) }}>
                  <View style={{ flex: 0.38, justifyContent: "center", }}>
                    <Text style={[cstyle.boldFont, cstyle.H7Text]}>Email</Text>
                  </View>
                  <TouchableOpacity style={{ flex: 0.54, alignItems: "flex-end", paddingHorizontal: responsiveWidth(1) }}>
                    <Text style={[cstyle.boldFont, cstyle.H7Text, cstyle.greyColorText]}>{this.state.driverEmail}</Text>
                  </TouchableOpacity>

                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", ustifyContent: "space-between", borderBottomWidth: 0.5, borderBottomColor: "#c6c6c6", paddingVertical: responsiveHeight(1.5) }}>
                  <View style={{ flex: 0.38, justifyContent: "center", }}>
                    <Text style={[cstyle.boldFont, cstyle.H7Text]}>Address</Text>
                  </View>
                  <TouchableOpacity style={{ flex: 0.54, alignItems: "flex-end", paddingHorizontal: responsiveWidth(1) }}>
                    <Text style={[cstyle.boldFont, cstyle.H7Text, cstyle.greyColorText]}>{this.state.driverAddress}</Text>
                  </TouchableOpacity>

                </TouchableOpacity>

              </View> */}
            <ListItem
              style={[cstyle.profilelist]}
              icon={
                <Icon
                  name={global.nextIcon}
                  color={config.defaultFontColor}
                  size={18}
                />
              }
              onPress={() => {
                props.navigation.navigate('EditProfile');
              }}>
              <P style={{marginBottom: 0}}>Edit Profile</P>
            </ListItem>
            <ListItem
              style={[cstyle.profilelist]}
              icon={
                <Icon
                  name={global.nextIcon}
                  color={config.defaultFontColor}
                  size={18}
                />
              }
              onPress={() => props.navigation.navigate('Address')}>
              <P style={{marginBottom: 0}}>Transaction History</P>
            </ListItem>

            <ListItem
              icon={
                <Icon
                  name={global.nextIcon}
                  color={config.defaultFontColor}
                  size={18}
                />
              }
              onPress={() => props.navigation.navigate('Login')}>
              <P style={{marginBottom: 0}}>Login</P>
            </ListItem>

            <Space />

            <Btn
              style={[cstyle.btnlgout]}
              label={'Logout'}
              type={'light'}
              onPress={() => dispatch.session.logout()}
            />
          </View>
        </ScrollView>
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
  topprofiletopbg: {
    position: 'absolute',
    width: '100%',
    height: 250,
    top: -125,
    left: 0,
    borderBottomEndRadius: 100,
    borderBottomStartRadius: 100,
  },
  profilelist: {
    borderBottomWidth: 1,
    borderBottomColor: '#D2D2D2',
  },
  btnlgout: {
    backgroundColor: '#E86394',
  },
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
