import React from 'react';
import {
	View,
	FlatList,
	StyleSheet,
	TextInput,
	Image,
	Dimensions,
	TouchableOpacity
} from 'react-native';

import SplashScreen from 'react-native-splash-screen'
const { width } = Dimensions.get('window');

export default class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}

	}
	componentDidMount() { 
		SplashScreen.hide() 
		this.props.navigation.navigate('Home');
	}


	render() {

		return (
			<View style={{ justifyContent: "center", alignItems: "center", flex: 1, backgroundColor: "#e7abc3" }}>
				<Image source={require('../../assets/img/vita1.png')} style={{ width: "80%", resizeMode: "contain" }} />
				<Image source={require('../../assets/img/vita2.png')} style={{ width: "50%", height: 80 ,resizeMode:"contain"}} />
			</View>

		);
	}

}

