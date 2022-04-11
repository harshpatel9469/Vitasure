import React, {Component, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/Feather';
import {
  Wrapper,
  Header,
  Left,
  Right,
  Container,
  Space,
  H1,
  P,
  Btn,
  LabelIconInput,
} from '../utils';
import config from '../../config';
import { useDispatch, useSelector } from 'react-redux';

const CityPlaceHolder = {
  label: 'Select item',
  value: null,
  color: 'gray',
};
const Register = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
  const [isSave, setIsSet] = useState(false);

  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state) => state.loading.effects.session.signUp,
  );
  const registerRes = useSelector((state) => state.session.registerRes); 
  const register = () => {
    setIsSet(true);
    if (firstName != '' && password != '' && email != '' && lastName != '' && confirmPwd != '') {
      setIsSet(false);
      dispatch.session.signUp({first_name: firstName,last_name:lastName, password: password,email:email});
    }
  };
  useEffect(() => {
console.log(registerRes);
    if (registerRes?.code==200) {
      props.navigation.navigate('Home');
      dispatch.session.setRigsterMessage(null)
    }
  }, [registerRes]);
  return (
    <Wrapper>
      <Header>
        <Left></Left>
        <Right>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={[config.style.iconBtn, {marginRight: -10}]}>
            <P>Sign In</P>
          </TouchableOpacity>
        </Right>
      </Header>

      <Container>
        <Space height={60} />
        <H1>Sign Up!</H1>
        <P>Register with us and start shopping</P>

        <View style={config.style.form}>
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              ustifyContent: 'space-between',
              paddingVertical: responsiveHeight(1.5),
            }}>
            <View style={config.style.labelWrapper}>
              <View style={config.style.labelIconWrapper}>
                <Icon name={'user'} color={config.primaryColor} size={15} />
              </View>
              <View>
                <Text style={[config.style.labelText, {color: 'black'}]}>
                  {'First Name'}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                borderWidth: 1,
                marginTop: 5,
                borderColor: '#c6c6c6',
                borderRadius: 6,
              }}>
              <TextInput
                placeholder="Enter The First Name"
                placeholderTextColor={'gray'}
                onChangeText={(text) => setFirstName(text)}
                value={firstName}
                style={[
                  {
                    height: 42,
                    width: '100%',
                    margin: responsiveWidth(0),
                    paddingHorizontal: scale(17),
                    marginVertical: responsiveHeight(0),
                    borderBottomColor: '#c6c6c6',
                  },
                ]}/>
            </View>
            {isSave && firstName == '' ? (
              <Text style={{color: 'red', fontSize: scale(13)}}>
                Please enter first name
              </Text>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              ustifyContent: 'space-between',
              paddingVertical: responsiveHeight(1.5),
            }}>
            <View style={config.style.labelWrapper}>
              <View style={config.style.labelIconWrapper}>
                <Icon name={'user'} color={config.primaryColor} size={15} />
              </View>
              <View>
                <Text style={[config.style.labelText, {color: 'black'}]}>
                  {'Last Name'}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                borderWidth: 1,
                marginTop: 5,
                borderColor: '#c6c6c6',
                borderRadius: 6,
              }}>
              <TextInput
                placeholder="Enter The Last Name"
                placeholderTextColor={'gray'}
                onChangeText={(text) => setLastName(text)}
                value={lastName}
                style={[
                  {
                    height: 42,
                    width: '100%',
                    margin: responsiveWidth(0),
                    paddingHorizontal: scale(17),
                    marginVertical: responsiveHeight(0),
                    borderBottomColor: '#c6c6c6',
                  },
                ]}/>
            </View>
            {isSave && lastName == '' ? (
              <Text style={{color: 'red', fontSize: scale(13)}}>
                Please enter last name
              </Text>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              ustifyContent: 'space-between',
              paddingVertical: responsiveHeight(1.5),
            }}>
            <View style={config.style.labelWrapper}>
              <View style={config.style.labelIconWrapper}>
                <Icon name={'mail'} color={config.primaryColor} size={15} />
              </View>
              <View>
                <Text style={[config.style.labelText, {color: 'black'}]}>
                  {'Email'}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                borderWidth: 1,
                marginTop: 5,
                borderColor: '#c6c6c6',
                borderRadius: 6,
              }}>
              <TextInput
                placeholder="Enter The Email"
                placeholderTextColor={'gray'}
                onChangeText={(text) => setEmail(text)}
                value={email}
                style={[
                  {
                    height: 42,
                    width: '100%',
                    margin: responsiveWidth(0),
                    paddingHorizontal: scale(17),
                    marginVertical: responsiveHeight(0),
                    borderBottomColor: '#c6c6c6',
                  },
                ]}/>
            </View>
            {isSave && email == '' ? (
              <Text style={{color: 'red', fontSize: scale(13)}}>
                Please enter email
              </Text>
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'column',
              ustifyContent: 'space-between',
              paddingVertical: responsiveHeight(1.5),
            }}>
            <View style={config.style.labelWrapper}>
              <View style={config.style.labelIconWrapper}>
                <Icon name={'lock'} color={config.primaryColor} size={15} />
              </View>
              <View>
                <Text style={[config.style.labelText, {color: 'black'}]}>
                  {'Password'}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                borderWidth: 1,
                marginTop: 5,
                borderColor: '#c6c6c6',
                borderRadius: 6,
              }}>
              <TextInput
                placeholder="Enter The Password"
                placeholderTextColor={'gray'}
                secureTextEntry={secureEntry}
                onChangeText={(text) => setPassword(text)}
                value={password}
                style={[
                  {
                    height: 42,
                    width: '100%',
                    margin: responsiveWidth(0),
                    paddingHorizontal: scale(17),
                    marginVertical: responsiveHeight(0),
                    borderBottomColor: '#c6c6c6',
                  },
                ]}></TextInput>
              <TouchableOpacity
                onPress={() => {
                  setSecureEntry(!secureEntry);
                }}
                style={{position: 'absolute', right: 23, bottom: 7}}>
                <Icon
                  name={secureEntry ? 'eye-off' : 'eye'}
                  size={18}
                  color={'#bcbcbc'}
                />
              </TouchableOpacity>
            </View>
            {isSave && password == '' ? (
              <Text style={{color: 'red', fontSize: scale(13)}}>
                Please enter password
              </Text>
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'column',
              ustifyContent: 'space-between',
              paddingVertical: responsiveHeight(1.5),
            }}>
            <View style={config.style.labelWrapper}>
              <View style={config.style.labelIconWrapper}>
                <Icon name={'lock'} color={config.primaryColor} size={15} />
              </View>
              <View>
                <Text style={[config.style.labelText, {color: 'black'}]}>
                  {'Confirm Password'}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                borderWidth: 1,
                marginTop: 5,
                borderColor: '#c6c6c6',
                borderRadius: 6,
              }}>
              <TextInput
                placeholder="Enter The Confirm Password"
                placeholderTextColor={'gray'}
                secureTextEntry={secureEntry}
                onChangeText={(text) => setConfirmPwd(text)}
                value={confirmPwd}
                style={[
                  {
                    height: 42,
                    width: '100%',
                    margin: responsiveWidth(0),
                    paddingHorizontal: scale(17),
                    marginVertical: responsiveHeight(0),
                    borderBottomColor: '#c6c6c6',
                  },
                ]}></TextInput>
              <TouchableOpacity
                onPress={() => {
                  setSecureEntry(!secureEntry);
                }}
                style={{position: 'absolute', right: 23, bottom: 7}}>
                <Icon
                  name={secureEntry ? 'eye-off' : 'eye'}
                  size={18}
                  color={'#bcbcbc'}
                />
              </TouchableOpacity>
            </View>
            {isSave && password == '' ? (
              <Text style={{color: 'red', fontSize: scale(13)}}>
                Please enter confirm password
              </Text>
            ) : null}
          </TouchableOpacity>

          <Space />

          <Btn label={'Sign Up'} onPress={register} isSpinner={isLoading}/>
        </View>
      </Container>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '75%',
    maxWidth: 400,
    minWidth: 200,
    alignSelf: 'center',
  },
  field: {
    marginTop: 25,
  },
  labelWrapper: {
    flexDirection: 'row',
  },
  labelIconWrapper: {
    width: 23,
  },
  labelText: {
    color: '#a7a6b4',
    fontSize: 13.5,
  },
  labelIcon: {},
  input: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 23,
    paddingRight: 3,
    paddingTop: 6,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#bcbcbc',
  },
  btn: {
    height: 46,
    borderRadius: 23,
    backgroundColor: '#cc2122',
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
    flexDirection: 'row',
  },
  btnText: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 18,
  },
  topprofiletopbg: {
    position: 'absolute',
    width: '100%',
    height: 250,
    top: -125,
    left: 0,
    borderBottomEndRadius: 100,
    borderBottomStartRadius: 100,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#f7f8fa',
  },
  middle: {
    width: responsiveWidth(100),
  },
  profileview: {padding: responsiveWidth(2.5), flex: 0.3},
  subcon1: {paddingHorizontal: responsiveWidth(2.5)},
  subcon2: {paddingHorizontal: responsiveWidth(2.5)},

  iconview: {
    justifyContent: 'center',
    alignItems: 'center',
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

export default Register;

// const styles = StyleSheet.create({
//     form: {
//         width: '75%',
//         maxWidth: 400,
//         minWidth: 200,
//         alignSelf: 'center'
//     },
//     field: {
//         marginTop: 25
//     },
//     labelWrapper: {
//         flexDirection: 'row'
//     },
//     labelIconWrapper: {
//         width: 23
//     },
//     labelText: {
//         color: '#a7a6b4',
//         fontSize: 13.5
//     },
//     labelIcon: {

//     },
//     input: {
//         fontWeight: "bold",
//         fontSize: 16,
//         paddingLeft: 23,
//         paddingRight: 3,
//         paddingTop: 6,
//         paddingBottom: 4,
//         borderBottomWidth: 1,
//         borderBottomColor: '#bcbcbc'
//     },
//     btn: {
//         height: 46,
//         borderRadius: 23,
//         backgroundColor: '#cc2122',
//         alignItems: 'center',
//         justifyContent: 'center',
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 1,
//         },
//         shadowOpacity: 0.18,
//         shadowRadius: 1.00,
//         elevation: 1,
//         flexDirection: 'row'
//     },
//     btnText: {
//         fontWeight: 'bold',
//         color: '#ffffff',
//         fontSize: 18
//     }
// });
