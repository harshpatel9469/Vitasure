import React from 'react';
import {Image, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Ionicons';
import config from '../../config';
import {ListItem, P, Sm} from '../utils';
import FontistoIcon from 'react-native-vector-icons/dist/Fontisto';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {scale} from 'react-native-size-matters';

export const PersonCard = (props) => {
  return (
    <View
      key={props?.item?.id}
      style={[
        {
          width: scale(100),
          height: scale(100),
          backgroundColor:
            props.Name == 'Him' || props.Name == 'Newly Wed'
              ? '#005266'
              : '#e4048d',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: scale(100),
        },
        props.style,
      ]}>
      <Image
        source={props.image}
        style={{
          width: scale(80),
          height: scale(80),
          padding: scale(15),
          resizeMode: 'cover',
        }}
      />
      {/* <FontistoIcon name={props.IconName} style={{ fontSize: 24, color: "#fefefe" }} />
       */}
      <Text
        style={{
          fontSize: scale(13),
          marginTop: props.Name == 'Newly Wed' ? scale(-20) : scale(-13),
          fontWeight: 'bold',
          color: '#fefefe',
          textAlign: 'center',
          width: scale(50),
        }}>
        {props.Name}
      </Text>
    </View>
  );
};
