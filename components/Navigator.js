/**
 * Sample React Native Navigator
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import * as React from 'react';
 import { LogBox, Platform } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
 import Icon from 'react-native-vector-icons/dist/Feather';
 import config from '../config';
 
 // all screens
 import Home from './screens/Home';
 import CategoryListing from './screens/CategoryListing';
 import ProductListing from './screens/ProductListing';
 import Address from './screens/Address';
 import Payment from './screens/Payment';
 import ThankYou from './screens/ThankYou';
 import Membership from './screens/Membership';
 import Cart from './screens/Cart';
 import Settings from './screens/Settings';
 import VatalityTips from './screens/VatalityTips';
 import ProductDetail from './screens/ProductDetail';
 import Login from './screens/Login';
 import Register from './screens/Register';
 import OrderHistory from './screens/OrderHistory';
 import OrderDetail from './screens/OrderDetail';
 import WebViewContent from './screens/WebViewContent';
 import EditProfile from './screens/EditProfile';
 import Splash from './screens/Splash'
 import Tabs from '../TabNavigator';
 import OurPlant from './screens/OurPlant'
 import PlantDescription from './screens/PlantDescription';
 global.debugMode = false;
 global.backIcon = Platform.OS == 'ios' ? 'chevron-left' : 'arrow-left';
 global.nextIcon = Platform.OS == 'ios' ? 'chevron-right' : 'arrow-right';
 if(!global.debugMode) {
   LogBox.ignoreAllLogs(true);
 }
 
 const Tab = createBottomTabNavigator();
 const Stack = createStackNavigator();
 
 const TabBarIcon = (props) => {
   return (
     <Icon
       name={props.name}
       size={22}
       style={{ marginBottom: -3 }}
       color={props.focused ? config.primaryColor : config.defaultFontColor}
     />
   );
 }
 
  
 const Navigator = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator screenOptions={{
         headerShown: false,
         cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
       }}>
         <Stack.Screen name="Splash" component={Splash} />
         <Stack.Screen name="Home" component={Tabs} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Register" component={Register} />
         <Stack.Screen name="Shop" component={CategoryListing} />
         <Stack.Screen name="Products" component={ProductListing} />
         <Stack.Screen name="ProductDetail" component={ProductDetail} />
         <Stack.Screen name="WebViewContent" component={WebViewContent} />
         <Stack.Screen name="VatalityTips" component={VatalityTips} />
         <Stack.Screen name="Cart" component={Cart} />
         <Stack.Screen name="Address" component={Address} />
         <Stack.Screen name="Payment" component={Payment} />
         <Stack.Screen name="ThankYou" component={ThankYou} />
         <Stack.Screen name="OrderHistory" component={OrderHistory} />
         <Stack.Screen name="OrderDetail" component={OrderDetail} />
         <Stack.Screen name="EditProfile" component={EditProfile} />
         <Stack.Screen name="OurPlant" component={OurPlant} />
         <Stack.Screen name="Membership" component={Membership} />
         <Stack.Screen name="PlantDescription" component={PlantDescription} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 export default Navigator;
 