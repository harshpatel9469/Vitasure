import React from 'react';
import {View,TouchableOpacity} from 'react-native';

import {
  Card,
  CardContent,
  CardFooter,
  Left,
  Right,
  Touchable,
  StarRating,
  Sm,
  Price,
  CardImage,
} from '../utils';
import Icon from 'react-native-vector-icons/dist/Feather';
import config from '../../config'; 

export default function ProductGridItem(props) {
  const layout01 = () => {
    return (
      <Card style={props.style} onPress={() => props.onPress(props.item)}>
        <CardImage source={{uri: props.item.images[0]}} />
        <CardContent>
          <View>
            <Sm>{props.item.name}</Sm>
          </View>
        </CardContent>
        <CardFooter>
          <Left>
            <View>
              <StarRating rating={props.item.rating} />
              <Price
                price={props.item.price}
                specialPrice={props.item.special_price}
              />
            </View>
          </Left>
          <Right>
            <Touchable
              onPress={() => {}}
              style={[config.style.iconBtn, config.style.gridCartBtn]}>
              <Icon
                name={'shopping-cart'}
                size={20}
                color={config.style.iconBtnColor}
              />
            </Touchable>
          </Right>
        </CardFooter>
      </Card>
    );
  };
// console.log(props.layout, JSON.stringify(props.item?.images[0]?.src),JSON.stringify(props.item.prices),props.item.id); 
  const layout02 = () => {
    return (
      <TouchableOpacity   onPress={() => props.onPress(props.item)}>
        <Touchable
          style={[props.style || {}, {marginBottom: 15}]}
         >
          <CardImage
            source={{uri: props.item?.images[0]?.src}}
            style={{borderRadius: config.defaultBorderRadius}}
          />
        </Touchable>

        <Sm>{props.item.name}</Sm>
        <Price
          price={props.item.prices.price}
          specialPrice={props.item.prices?.sale_price}
        />
      </TouchableOpacity>
    );
  };

  switch (props.layout) {
    case 2:
      return layout02();

    case 3:
      return layout01();

    default:
      return null;
  }
}
