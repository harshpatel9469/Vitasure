import config from '../../config';
import React, {Component, useEffect, useState} from 'react';
import {scale} from 'react-native-size-matters';
import {
  Image,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Linking,
  TextInput,
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
  H6,
} from '../utils';

import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import AntDesignIcon from 'react-native-vector-icons/dist/AntDesign';
import {Colors} from '../Constant';

export default function ContactUs(props) {
  const dispatch = useDispatch();

  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSave, setIsSave] = useState(false);

  const onSubmit=()=>{
    setIsSave(true)
    if(userName!="" && email!="" && subject!=""){
      setIsSave(false)
    }
  }
  return (
    <View style={[style.mainContainer]}>
      <Header
        style={{
          paddingHorizontal: 0,
          backgroundColor: Colors.primary,
          alignItems: 'center',
        }}>
        <Left>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={[config.style.iconBtn, {marginRight: -10}]}>
            <FeatherIcon
              name="arrow-left"
              size={scale(20)}
              color={Colors.white}
            />
          </TouchableOpacity>
        </Left>
        <H1 style={{top: scale(5), color: Colors.white}}>Contact Us</H1>
        <Right></Right>
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <H1
            style={{
              fontFamily: 'Lora-BoldItalic',
              fontWeight: '500',
              color: '#000',
            }}>
            Need something?
          </H1>
          <H6 style={{color: '#666'}}>
            Like how our vitality enriching product aid you vitalize your life.
            The VITASURE team will do our best to aid you find the solution you
            need.
          </H6>
          <H6>
            You can contact from any option down below or fill the form to get a
            reply.
          </H6>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <H4>EMAIL : </H4>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('mailto:health@vitasure.in');
              }}>
              <H6 style={{color: '#666'}}>health@vitasure.in</H6>
            </TouchableOpacity>
          </View>
          {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesignIcon
              name="linkedin-square"
              size={scale(25)}
              color={config.defaultFontColor}
            />
            <AntDesignIcon
              name="facebook-square"
              size={scale(25)}
              color={config.defaultFontColor}
              style={{marginLeft: scale(9)}}
            />
            <AntDesignIcon
              name="twitter"
              size={scale(25)}
              color={config.defaultFontColor}
              style={{marginLeft: scale(9)}}
            />
            <AntDesignIcon
              name="instagram"
              size={scale(25)}
              color={config.defaultFontColor}
              style={{marginLeft: scale(9)}}
            />
          </View> */}
          <View style={{marginTop: scale(20)}}>
            <View style={{marginTop: scale(20)}}>
              <Text style={[config.style.labelText, style.labelStyle]}>
                {'Your name'}
              </Text>
              <TextInput
                onChangeText={(text) => setUsername(text)}
                value={userName}
                style={[
                  style.textinputStyle,
                  {borderColor: isSave && userName == '' ? 'red' : '#c6c6c6'},
                ]}
              />
              {isSave && userName == '' ? (
                <Text style={{color: 'red', fontSize: scale(13)}}>
                  Please enter username
                </Text>
              ) : null}
            </View>
            <View style={{marginTop: scale(20)}}>
              <Text style={[config.style.labelText, style.labelStyle]}>
                {'Your email'}
              </Text>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                value={email}
                style={[
                  style.textinputStyle,
                  {borderColor: isSave && email == '' ? 'red' : '#c6c6c6'},
                ]}
              />
              {isSave && email == '' ? (
                <Text style={{color: 'red', fontSize: scale(13)}}>
                  Please enter email
                </Text>
              ) : null}
            </View>
            <View style={{marginTop: scale(20)}}>
              <Text style={[config.style.labelText, style.labelStyle]}>
                {'Subject'}
              </Text>
              <TextInput
                onChangeText={(text) => setSubject(text)}
                value={subject}
                style={[
                  style.textinputStyle,
                  {borderColor: isSave && subject == '' ? 'red' : '#c6c6c6'},
                ]}
              />
              {isSave && subject == '' ? (
                <Text style={{color: 'red', fontSize: scale(13)}}>
                  Please enter subject
                </Text>
              ) : null}
            </View>

            <View style={{marginTop: scale(20)}}>
              <Text style={[config.style.labelText, style.labelStyle]}>
                {'Your message (optional)'}
              </Text>
              <TextInput
                onChangeText={(text) => setMessage(text)}
                value={message}
                style={[style.textinputStyle, {height: scale(150)}]}
              />
            </View>
          </View>
          <Btn
            style={[
              style.btnlgout,
              {marginVertical: scale(20), borderRadius: 0, width: scale(150)},
            ]}
            onPress={onSubmit}
            label={'SUBMIT'}
            type={'light'}
          />
        </Container>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f7f8fa',
  },
  textinputStyle: {
    height: 42,
    width: '100%',
    marginTop: scale(10),
    paddingHorizontal: scale(17),
    borderColor: '#c6c6c6',
    borderWidth: 2,
    borderRadius: scale(5),
  },
  labelStyle: {
    color: '#666',
    fontSize: scale(15),
    fontFamily: 'Lora-Bold',
  },
  btnlgout: {
    backgroundColor: '#E86394',
  },
});
