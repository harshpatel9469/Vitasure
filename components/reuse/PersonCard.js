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
      key={props?.item?.id?.toString()}
      style={[
        {
          width: scale(100),
          minHeight: scale(120),
         
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: scale(100),
         
        },
        props.style,
      ]}>
      <Image
        source={props.image}
        style={{
          width: scale(100),
          height: scale(100),
          padding: scale(15),
          resizeMode: 'cover',
        }}
      />
      {/* <FontistoIcon name={props.IconName} style={{ fontSize: 24, color: "#fefefe" }} />
       */}
      <Text
        style={{
          fontSize: scale(13),
         // marginTop:scale(-13),
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
          width: scale(100),
        
        }}>
        {props.Name}
      </Text>
    </View>
  );
};
