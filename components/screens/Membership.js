import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Wrapper, Container, Space, H3, P, Btn, Checkbox} from '../utils';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import {scale} from 'react-native-size-matters';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {Colors} from '../Constant';
import Carousel from 'react-native-snap-carousel';
import {Pagination} from 'react-native-snap-carousel';

import config from '../../config';
import style from '../../style';
const {width,height} = Dimensions.get('window');
import sample_data from '../../sample_data';
export default class MemberShip extends React.Component {
  constructor() {
    super();
    this.state = {
      QA: [
        {
          id: 1,
          question: 'What is a paragraph?',
          ans:
            'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc.',
        },

        {
          id: 2,
          question: 'How do I decide what to put in a paragraph?',
          ans:
            'Before you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. ',
        },
        {
          id: 3,
          question: 'How do I organize a paragraph?',
          ans:
            'There are many different ways to organize a paragraph. The organization you choose will depend on the controlling idea of the paragraph.',
        },
        {
          id: 4,
          question: 'How do I decide what to put in a paragraph?',
          ans:
            'Before you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. ',
        },
        {
          id: 5,
          question: 'How do I organize a paragraph?',
          ans:
            'There are many different ways to organize a paragraph. The organization you choose will depend on the controlling idea of the paragraph.',
        },
      ],
      currentIndex: 0,
      activeSlide1: 0,
    };
  }

  _renderCarouselItem = ({item, index}) => {
    return (
      <View>
        <Text
          style={{
            fontSize: scale(11),
            color: Colors.darkGray,
          }}>
          {item.question}
        </Text>
        <Text
          style={{
            fontSize: scale(11),
            color: Colors.darkGray,
            fontWeight: 'bold',
          }}>
          {item.question}
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: scale(320),
            marginTop: scale(10),
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: scale(300),
              padding: scale(10),
              minHeight: scale(100),
              backgroundColor: Colors.primary,
              borderRadius: scale(10),
            }}>
            <Text
              style={{
                fontSize: scale(12),
                color: Colors.darkGray,
              }}>
              {item.ans}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View
        style={{flex: 1, backgroundColor: Colors.white, alignItems: 'center'}}>
        <ScrollView>
          <View
            style={{
              minHeight: scale(height-60),
            }}>
            <View style={{width: '100%'}}>
              <Text
                style={{
                  fontSize: scale(15),
                  color: Colors.darkGray,
                  marginVertical: scale(5),
                }}>
                Choose Your Plan
              </Text>

              <View
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    borderWidth: 1,
                    width: scale(310),
                    height: scale(35),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: scale(5),
                    marginVertical:scale(5)
                  }}>
                  <Checkbox style />
                  <Text style={{paddingHorizontal: scale(5)}}>3 Months</Text>
                  <Text
                    style={{ 
                      textDecorationLine: 'line-through',
                      width:scale(100),
                      textAlign:"right"
                    }}>
                    $99
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        paddingHorizontal: scale(10),
                        textDecorationLine: 'line-through',
                      }}>
                      $99
                    </Text>
                    <Text
                      style={{
                        fontSize: scale(15),
                        color: Colors.darkGray,
                        marginVertical: scale(5),
                      }}>
                      $499
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    width: scale(310),
                    height: scale(35),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: scale(5),
                    marginVertical:scale(5)
                  }}>
                  <Checkbox style />
                  <Text style={{paddingHorizontal: scale(5)}}>6  Months</Text>
                  <Text
                    style={{ 
                      textDecorationLine: 'line-through',
                      width:scale(100),
                      textAlign:"right"
                    }}>
                    $99
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        paddingHorizontal: scale(10),
                        textDecorationLine: 'line-through',
                      }}>
                      $99
                    </Text>
                    <Text
                      style={{
                        fontSize: scale(15),
                        color: Colors.darkGray,
                        marginVertical: scale(5),
                      }}>
                      $499
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: scale(5),
              }}>
              <View style={{width: '100%'}}>
                <Text
                  style={{
                    fontSize: scale(15),
                    color: Colors.darkGray,
                  }}>
                  Still not sure??
                </Text>
                <Text
                  style={{
                    fontSize: scale(15),
                    color: Colors.darkGray,
                    marginVertical: scale(5),
                  }}>
                  Hear from some of us PLUS members
                </Text>

                <View>
                  <Carousel
                    data={this.state.QA}
                    renderItem={this._renderCarouselItem}
                    sliderWidth={width - 30}
                    itemWidth={width - 30}
                    onSnapToItem={(index) =>
                      this.setState({activeSlide1: index})
                    }
                  />
                  <Pagination
                    dotsLength={sample_data.homeBanner.length}
                    activeDotIndex={this.state.activeSlide1}
                    containerStyle={{
                      // position: 'absolute',
                      top: scale(-10),
                      // left: 100,
                    }}
                    dotStyle={{
                      width: 15,
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: '#e7abc3',
                    }}
                    inactiveDotStyle={{
                      backgroundColor: Colors.darkGray,
                    }}
                    inactiveDotOpacity={1}
                    inactiveDotScale={0.6}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{width: '100%'}}>
                <Text
                  style={{
                    fontSize: scale(15),
                    color: Colors.darkGray,
                    marginVertical: scale(5),
                  }}>
                  Frequently Asked Questions
                </Text>
              </View>
              <FlatList
                data={this.state.QA}
                //   nestedScrollEnabled
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      style={{
                        borderColor: Colors.grey,
                        borderWidth: 1,
                        borderRadius: scale(5),
                        padding: scale(5),
                        width: scale(330),
                        marginVertical: scale(5),
                      }}
                      onPress={() => {
                        if (
                          this.state.currentIndex == 0 ||
                          this.state.currentIndex !== index + 1
                        )
                          this.setState({currentIndex: index + 1}, () => {
                            console.log(this.state.currentIndex);
                          });
                        else
                          this.setState({currentIndex: 0}, () => {
                            console.log(this.state.currentIndex);
                          });
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text>{item.question}</Text>
                        <EntypoIcon
                          name="chevron-down"
                          color={Colors.primary}
                          style={{paddingHorizontal: scale(5)}}
                          size={scale(15)}
                        />
                      </View>
                      {this.state.currentIndex == index + 1 ? (
                        <Text>{item.ans}</Text>
                      ) : null}
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
            <View
              style={{
                borderWidth: 1,
                marginVertical: scale(10),
                borderColor: Colors.grey,
                width: scale(320),
              }}
            />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: Colors.darkGray, fontSize: scale(12)}}>
                {'Terms & Conditions'}
              </Text>
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            height: scale(60),
            width: '100%',
            borderTopWidth: 0.7,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.white,
          }}>
          <TouchableOpacity
            style={{
              width: scale(320),
              backgroundColor: Colors.primary,
              height: scale(40),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: scale(5),
            }}>
            <Text style={{color: Colors.white, fontSize: scale(12)}}>
              {'Get Plus'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingBottom:scale(100)}}/>
      </View>
    );
  }
}
