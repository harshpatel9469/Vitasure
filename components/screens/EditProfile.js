import React, {Component, useEffect, useState} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
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
import Dialog from 'react-native-dialog';

import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/dist/Ionicons';
import PhoneInput from 'react-native-phone-number-input';
import RNPickerSelect from 'react-native-picker-select';
import {scale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
const CityPlaceHolder = {
  label: 'Select item',
  value: null,
  color: 'gray',
};
const EditProfile = (props) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const userDetails = useSelector((state) => state.session.userDetails);
  console.log(user);
  const [ProfileImgUrl, setProfileImgUrl] = useState(user?.avatar);
  const [Name, setName] = useState(user?.user_display_name);
  const [Email, setEmail] = useState(user?.user_email);
  const [Phone, setPhone] = useState('');
  const [Address, setAddress] = useState('');
  const [Status, setStatus] = useState('');
  useEffect(() => {
    if (user?.token) {
      dispatch.session.getProfile(user.token);
    }
  },[]);
  const onOpenCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log('Image ----', image);
      let path = image.path;
      handleCancel();
      setProfileImgUrl(path);
    });
  };

  const onOpenGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log('Gallery Image', image);
      let path = image.path;
      handleCancel();

      setProfileImgUrl(path);
      // onSavePassportURL(path);
      // setImgUrl(path);
    });
  };
  const showDialog = () => {
    setDialogVisible(true);
  };

  const handleCancel = () => {
    setDialogVisible(false);
  };
  const onSave = () => {

  };
  return (
    <View style={[style.mainContainer]}>
      <View style={[style.topprofiletopbg]}>
        <Image
          source={require('../../assets/img/prifilebg.png')}
          style={{height: scale(250), width: scale(350)}}
        />
      </View>
      <Header>
        <Left>
          <IconBtn
            icon={global.backIcon}
            color="#fff"
            onPress={() => props.navigation.goBack()}
            style={{
              marginLeft: 0,
              color: '#fff',
              position: 'relative',
              top: scale(10),
            }}
          />
        </Left>
        <H1
          style={{
            color: '#ffffff',
            fontSize: scale(18),
            marginTop: 0,
            position: 'relative',
            top: scale(10),
          }}>
          Edit Profile
        </H1>
      </Header>

      <View style={[style.middle]}>
        <ScrollView>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: responsiveHeight(20),
              flexDirection: 'row',
            }}>
            {ProfileImgUrl ? (
              <TouchableOpacity
                style={[style.profileview]}
                onPress={() => showDialog()}>
                <View style={[style.subcon1]}>
                  <View style={[style.iconview]}>
                    <Image
                      source={{uri: ProfileImgUrl}}
                      style={{
                        width: responsiveWidth(20),
                        height: responsiveWidth(20),
                        borderRadius: responsiveWidth(20),
                      }}
                    />
                    {/* <Icon name="camera" type="FontAwesome" style={[cstyle.H1Text, { color: "#ffd428", }]} /> */}
                  </View>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[style.profileview]}
                onPress={() => showDialog()}>
                <View style={[style.subcon1]}>
                  <View style={[style.iconview]}>
                    <FontAwesomeIcon
                      name="camera"
                      type="FontAwesome"
                      style={[cstyle.H1Text, {color: '#eb6199'}]}
                    />
                  </View>
                </View>
                <View style={[style.subcon2]}>
                  <Text
                    style={[
                      {color: '#eb6199', marginTop: scale(5)},
                      cstyle.regularFont,
                      cstyle.H6Text,
                    ]}>
                    Edit photo
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
          <View style={{backgroundColor: '#f7f8fa'}}>
            <View
              style={{
                marginVertical: responsiveHeight(3),
                backgroundColor: '#fff',
                paddingHorizontal: responsiveWidth(2.2),
                borderBottomWidth: 0.5,
                borderBottomColor: '#c6c6c6',
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'column',
                  ustifyContent: 'space-between',
                  paddingVertical: responsiveHeight(1.5),
                }}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text style={[cstyle.boldFont, cstyle.H7Text]}>Name</Text>
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
                    placeholder="Enter The Username"
                    placeholderTextColor={'gray'}
                    onChangeText={(text) => setName(text)}
                    value={Name}
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
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: 'column',
                  ustifyContent: 'space-between',
                  paddingVertical: responsiveHeight(1.5),
                }}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text style={[cstyle.boldFont, cstyle.H7Text]}>E-mail</Text>
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
                    value={Email}
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
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  ustifyContent: 'space-between',
                  borderBottomWidth: 0,
                  borderBottomColor: '#c6c6c6',
                  paddingVertical: responsiveHeight(1.5),
                }}>
                <View
                  style={{
                    flex: 0.38,
                    justifyContent: 'center',
                    borderRadius: 6,
                  }}>
                  <Text style={[cstyle.boldFont, cstyle.H7Text]}>
                    Phone number
                  </Text>
                </View>
              </TouchableOpacity>
              <PhoneInput
                // ref={phoneInput}
                defaultValue={Phone}
                defaultCode="IN"
                layout="first"
                autoFocus={false}
                containerStyle={{
                  width: '100%',
                  height: 42,
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderColor: '#c6c6c6',
                  borderRadius: 6,
                }}
                textContainerStyle={{paddingVertical: 0}}
                onChangeFormattedText={(text) => {
                  setPhone(text);
                }}
              />

              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  ustifyContent: 'space-between',
                  borderBottomWidth: 0,
                  borderBottomColor: '#c6c6c6',
                  paddingVertical: responsiveHeight(1.5),
                }}>
                <View style={{flex: 0.38, justifyContent: 'center'}}>
                  <Text style={[cstyle.boldFont, cstyle.H7Text]}>State</Text>
                </View>
              </TouchableOpacity>

              <RNPickerSelect
                placeholder={CityPlaceHolder}
                items={[
                  {label: 'State 1', value: '1'},
                  {label: 'State 2 ', value: '2'},
                  {label: 'State 3', value: '3'},
                ]}
                onValueChange={(value) => console.log(value)}
                style={{
                  ...pickerSelectStyles,
                  iconContainer: {
                    top: 10,
                    right: 12,
                  },
                }}
                useNativeAndroidPickerStyle={false}
                textInputProps={{underlineColor: 'yellow', width: '100%'}}
                Icon={() => {
                  return (
                    <IoniconsIcon name="chevron-down" size={24} color="gray" />
                  );
                }}
              />

              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  ustifyContent: 'space-between',
                  borderBottomWidth: 0,
                  borderBottomColor: '#c6c6c6',
                  paddingVertical: responsiveHeight(1.5),
                }}>
                <View style={{flex: 0.38, justifyContent: 'center'}}>
                  <Text style={[cstyle.boldFont, cstyle.H7Text]}>City</Text>
                </View>
              </TouchableOpacity>

              <RNPickerSelect
                placeholder={CityPlaceHolder}
                items={[
                  {label: 'City 1', value: '1'},
                  {label: 'City 2 ', value: '2'},
                  {label: 'City 3', value: '3'},
                ]}
                onValueChange={(value) => console.log(value)}
                style={{
                  ...pickerSelectStyles,
                  iconContainer: {
                    top: 10,
                    right: 12,
                  },
                }}
                useNativeAndroidPickerStyle={false}
                textInputProps={{underlineColor: 'yellow', width: '100%'}}
                Icon={() => {
                  return (
                    <IoniconsIcon name="chevron-down" size={24} color="gray" />
                  );
                }}
              />

              <TouchableOpacity
                style={{
                  flexDirection: 'column',
                  ustifyContent: 'space-between',
                  paddingVertical: responsiveHeight(1.5),
                }}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text style={[cstyle.boldFont, cstyle.H7Text]}>Address</Text>
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
                    placeholder="Enter The Address"
                    placeholderTextColor={'gray'}
                    onChangeText={(text) => setAddress(text)}
                    value={Address}
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
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'column',
                  ustifyContent: 'space-between',
                  paddingVertical: responsiveHeight(1.5),
                }}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text style={[cstyle.boldFont, cstyle.H7Text]}>Pincode</Text>
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
                    placeholder="Enter The Pincpde"
                    placeholderTextColor={'gray'}
                    keyboardType={'numeric'}
                    onChangeText={(text) => setStatus(text)}
                    value={Status}
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
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <Btn
            style={[cstyle.btnlgout]}
            label={'Save'}
            type={'light'}
            onPress={onSave}
          />
          <View style={{height: scale(80)}}></View>
        </ScrollView>
      </View>
      <Dialog.Container visible={dialogVisible}>
        <Dialog.Title>Take A Image </Dialog.Title>
        <Dialog.Button label="Camera" onPress={() => onOpenCamera()} />
        <Dialog.Button label="Gallery" onPress={() => onOpenGallery()} />
        <Dialog.Button label="Cancel" onPress={() => handleCancel()} />
      </Dialog.Container>
    </View>
  );
};
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingHorizontal: scale(20),
    // paddingRight: scale(215), // to ensure the text is never behind the icon
  },
});

const style = StyleSheet.create({
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
    paddingHorizontal: scale(10),
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
  btnlgout: {
    backgroundColor: '#E86394',
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
export default EditProfile;
