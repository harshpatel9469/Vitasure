/**
 * Sample React Native Navigator
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import * as React from 'react';
 import { LogBox, Platform ,Statusbar} from 'react-native';
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
 import VatalityTips from './screens/VatalityTips';
 
import { useSelector } from "react-redux";
import Toast from "react-native-toast-message"; 
import ContactUs from './screens/ContactUs';
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
  const alerts = useSelector((state) => state.alerts.all);
  const alertsProcessed = React.useRef(0);

  React.useEffect(() => {
    if (alerts.length <= alertsProcessed.current) return;

    const [alert] = alerts.slice(-1);
    Toast.show({ type: alert.type, text1: alert.title, text2: alert.message });
  }, [alerts, alertsProcessed]);
   return (
     <NavigationContainer>
     
       <Stack.Navigator screenOptions={{
         headerShown: false,
         cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
       }}>
         <Stack.Screen name="Splash" component={Splash} />
         <Stack.Screen name="Home" component={Tabs} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="ContactUs" component={ContactUs} />
         <Stack.Screen name="Settings" component={Settings} />
         <Stack.Screen name="Register" component={Register} />
         <Stack.Screen name="Shop" component={CategoryListing} />
         <Stack.Screen name="Products" component={ProductListing} />
         <Stack.Screen name="ProductDetail" component={ProductDetail} />
         <Stack.Screen name="WebViewContent" component={WebViewContent} />
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
         <Stack.Screen name="VatalityTips" component={VatalityTips} />
       </Stack.Navigator>
       <Toast ref={(ref) => Toast.setRef(ref)} />

     </NavigationContainer>
   );
 };
 
 export default Navigator;
 