// import React from 'react';
// import { Wrapper, Left, Container, Header, H1, FloatingLabelInput, IconBtn, Btn } from '../utils';

// export default class EditProfile extends React.Component {

//     state = {};

//     inputs = {};

//     focusNextField(field) {
//         if(inputs[field] !== undefined) {
//             inputs[field].focus();
//         }
//     }

// 	render() {

//         const footer = (
// 			<Footer>
// 				<Btn
// 					label={'Save'}
// 					onPress={() => console.log('save profile ...')}
// 				/>
// 			</Footer>
// 		);

// 		return (

// 			<Wrapper footer={footer}>
// 				<Header>
// 					<Left>
// 						<IconBtn icon={global.backIcon} 
// 							onPress={() => this.props.navigation.goBack()} 
// 							style={{marginLeft: -10}} 
// 						/>
// 					</Left>
// 				</Header>

// 				<Container>

// 					<H1>Edit Profile</H1>

// 					<FloatingLabelInput
// 						label="Full Name"  
// 						onChangeText={(text) => this.setState({fullname: text})}
// 						returnKeyType={"next"}
// 						value={this.state.fullname}
// 						ref={ input => {
// 							this.inputs['full_name'] = input;
// 						}}
// 						onSubmitEditing={() => {
// 							this.focusNextField('company');
// 						}}
// 					/>

// 					<FloatingLabelInput 
// 						label="Company Name (optional)"  
// 						onChangeText={(text) => this.setState({company: text})}
// 						returnKeyType={"next"}
// 						value={this.state.company}
// 						returnKeyType={"next"}
// 						ref={ input => {
// 							this.inputs['company'] = input;
// 						}}
// 						onSubmitEditing={() => {
// 							this.focusNextField('email');
// 						}}
// 					/>

// 					<FloatingLabelInput 
// 						label="Email"  
// 						onChangeText={(text) => this.setState({email: text})}
// 						returnKeyType={"next"}
// 						value={this.state.email}
// 						returnKeyType={"next"}
// 						ref={ input => {
// 							this.inputs['email'] = input;
// 						}}
// 						onSubmitEditing={() => {
// 							this.focusNextField('addr1');
// 						}}
// 					/>

// 				</Container>
// 			</Wrapper>

// 		);
// 	}
// }

import React, { Component } from "react";


import { TouchableOpacity, ScrollView, Image, TextInput, StyleSheet, Text, View, } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Wrapper, Header, Left, Container, Right, Space, Row, Column, Touchable, H1, P, H4, Footer, Sm, Center, Btn, IconBtn } from '../utils';
import Dialog from "react-native-dialog";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from "react-native-responsive-dimensions";
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/dist/Ionicons';
import PhoneInput from 'react-native-phone-number-input';
import RNPickerSelect from 'react-native-picker-select';

class EditProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ProfileImgUrl: '',
			profilearr: [
				{ name: "Martha Banks", suggest: "Gold Member", key: 0 },],
			settingarr: [

				{ title: "Phone number", subtitle: "584-490-9153" },
				{ title: "Email", subtitle: "freeslab88@gmail.com" },
				{ title: "Gender", subtitle: "Female" },
				{ title: "Birthday", subtitle: "April 16, 1988 " }
			],
			driverId: '',
			isSpinner: false,
			dCompanyId: '',
			driverName: '',
			driverEmail: '',
			driverPhone: '',
			driverAddress: '',
			driverTaxi_permit_number: '',
			driverPolicy_number: '',
			dInsurance_companyname: '',
			dInsurance_companynumber: '',
			driverDetails: [],
			dExpirationDate: '',
			driverStatus: '',
			driverCompanyDetails: [],
		}
	}
	componentDidMount() {
		// this.authenticateUser();
		// this.getDriverProfileImg();
	}
	UNSAFE_componentWillReceiveProps() {
		// this.authenticateUser();
		// this.getDriverProfileImg();
	}
	async getDriverProfileImg() {
		let driveimg = await AsyncStorage.getItem(STORAGE_KEY_DRIVERIMAGE);
		this.setState({ ProfileImgUrl: driveimg });
		this.forceUpdate();
		console.warn('Profile11', this.state.ProfileImgUrl)
	}
	async authenticateUser() {
		let driverInfo = await AsyncStorage.getItem(STORAGE_KEY_DRIVERDETAILS);
		driverInfo = JSON.parse(driverInfo);
		//   driverInfo = driverInfo[0];
		console.warn('driverDetails11..', driverInfo);
		this.setState({
			driverDetails: (driverInfo),
		});

		console.warn('get iddd : ' + this.state.driverDetails.companyId)
		this.setState({ driverId: this.state.driverDetails.id });
		this.setState({ dCompanyId: this.state.driverDetails.companyId });
		this.setState({ driverName: this.state.driverDetails.name });
		this.setState({ driverEmail: this.state.driverDetails.email });
		this.setState({ driverPhone: this.state.driverDetails.phone });
		this.setState({ driverAddress: this.state.driverDetails.address });
		this.setState({ dExpirationDate: this.state.driverDetails.expirationDate });
		this.setState({ driverStatus: this.state.driverDetails.status });


		this.setState({ driverTaxi_permit_number: this.state.driverDetails.taxiPermitNumber });
		this.setState({ driverPolicy_number: this.state.driverDetails.policyNumber });
		this.setState({ dInsurance_companyname: this.state.driverDetails.insuranceCompanyName });
		this.setState({ dInsurance_companynumber: this.state.driverDetails.insuranceCompanyNumber });

		this.forceUpdate();

		console.warn('CompanyDetails..', this.state.driverDetails);

	}
	profilemapping() {
		return this.state.profilearr.map((data) => {
			return (

				<TouchableOpacity style={[style.profileview]} onPress={() => this.showDialog()}>

					<View style={[style.subcon1]}>
						<View style={[style.iconview]}>
							<FontAwesomeIcon name="camera" type="FontAwesome" style={[cstyle.H1Text, { color: "#ffd428", }]} />
						</View>
					</View>
					<View style={[style.subcon2]}>
						<Text style={[{ color: "#ff8900" }, cstyle.regularFont, cstyle.H6Text]}>Edit photo</Text>
					</View>

				</TouchableOpacity>

			)

		})
	}
	settingmapping() {
		return this.state.settingarr.map((data) => {
			return (
				<TouchableOpacity style={{ flexDirection: "row", ustifyContent: "space-between", borderBottomWidth: 0.5, borderBottomColor: "#c6c6c6", paddingVertical: responsiveHeight(1.8) }}>
					<View style={{ flex: 0.38, justifyContent: "center", }}>
						<Text style={[cstyle.boldFont, cstyle.H7Text]}>{data.title}</Text>
					</View>
					<TouchableOpacity style={{ flex: 0.54, alignItems: "flex-end", paddingHorizontal: responsiveWidth(1) }}>
						<Text style={[cstyle.boldFont, cstyle.H7Text, cstyle.greyColorText]}>{data.subtitle}</Text>
					</TouchableOpacity>
					<View style={{ flex: 0.08, justifyContent: "center", alignItems: "center" }}>
						<IoniconsIcon name="ios-arrow-forward" type="Ionicons" style={[cstyle.H2Text, { color: "#c6c6c6", }]} />
					</View>
				</TouchableOpacity>
			)
		})
	}
	
	onOpenCamera() {

		ImagePicker.openCamera({
			width: 300,
			height: 400,
			cropping: true
		}).then(image => {
			 console.log("Image ----",image);
			let path = image.path;
			this.handleCancel();

			this.setState({ ProfileImgUrl: path });
			// this.onSavePassportURL(path);
			// this.setImgUrl(path);

		});
	}

	onOpenGallery() {
		ImagePicker.openPicker({
			width: 300,
			height: 400,
			cropping: true
		}).then(image => {
			 console.log("Gallery Image",image);
			let path = image.path;
			this.handleCancel();

			this.setState({ ProfileImgUrl: path });
			// this.onSavePassportURL(path);
			// this.setImgUrl(path);
		});
	}
	showDialog = () => {
		this.setState({ dialogVisible: true });
	};

	handleCancel = () => {
		this.setState({ dialogVisible: false });
	};
	async onDoneProcess() {
		this.setState({ isSpinner: true });
		var data = {
			id: this.state.driverId,
			name: this.state.driverName,
			phone: this.state.driverPhone,
			email: this.state.driverEmail,
			companyId: this.state.dCompanyId,
			taxiPermitNumber: this.state.driverTaxi_permit_number,
			insuranceCompanyName: this.state.dInsurance_companyname,
			insuranceCompanyNumber: this.state.dInsurance_companynumber,
			address: this.state.driverAddress,
			policyNumber: this.state.driverPolicy_number,
			expirationDate: this.state.dExpirationDate,
			status: this.state.driverStatus
		}
		console.warn('company id : ', this.state.dCompanyId)
		console.warn('data123 : ', data);
		API.postData('update_taxi_drivers.php', data)
			.then((responseJson) => {
				console.warn('Response...', responseJson);
				console.warn('Response123', responseJson.status);
				let driverDetail = data;

				this.setState({ isSpinner: false });

				if (responseJson.status == "OK") {
					console.warn('Driver Detail1', driverDetail);
					AsyncStorage.setItem(STORAGE_KEY_DRIVERDETAILS, JSON.stringify(driverDetail));
					this.props.navigation.navigate('UserInfo', { img: this.state.ProfileImgUrl, val: Math.random() * 1000 })
				}
			}).catch((error) => {
				console.warn('Test');
				Alert.alert("Request timeout ");
				//   this.setState({ isSpinner: false });
			});
		// this.props.navigation.navigate('UserInfo', { img: this.state.ProfileImgUrl })
	}
	render() {
		return (
			<View style={[style.mainContainer]}>

				<Header>
					<Left>
						<Touchable onPress={() => this.props.navigation.navigate('EditProfile')} style={{ padding: 5, }}>
							<P>Cancel</P>
						</Touchable>
					</Left>
					<Right>
						<Touchable onPress={() => this.props.navigation.navigate('EditProfile')} style={{ padding: 5, }}>
							<P>Done</P>
						</Touchable>
					</Right>
				</Header>
				<View style={[style.middle]}>
					<ScrollView>
						<View style={{ justifyContent: "center", alignItems: 'center', height: responsiveHeight(20), backgroundColor: "#fff", flexDirection: "row", }}>
							{/* {this.profilemapping()} */}
							{this.state.ProfileImgUrl ?
								<TouchableOpacity style={[style.profileview]} onPress={() => this.showDialog()}>

									<View style={[style.subcon1]}>
										<View style={[style.iconview]}>
											<Image source={{ uri: this.state.ProfileImgUrl }} style={{ width: responsiveWidth(20), height: responsiveWidth(20), borderRadius: responsiveWidth(20) }} />
											{/* <Icon name="camera" type="FontAwesome" style={[cstyle.H1Text, { color: "#ffd428", }]} /> */}
										</View>
									</View>
									{/* <View style={[style.subcon2]}>
                                <Text style={[{ color: "#ff8900" }, cstyle.regularFont, cstyle.H6Text]}>Edit photo</Text>
                            </View> */}
								</TouchableOpacity>
								:


								<TouchableOpacity style={[style.profileview]} onPress={() => this.showDialog()}>

									<View style={[style.subcon1]}>
										<View style={[style.iconview]}>
											<FontAwesomeIcon name="camera" type="FontAwesome" style={[cstyle.H1Text, { color: "#ffd428", }]} />
										</View>
									</View>
									<View style={[style.subcon2]}>
										<Text style={[{ color: "#ff8900" }, cstyle.regularFont, cstyle.H6Text]}>Edit photo</Text>
									</View>
								</TouchableOpacity>
							}
							<View style={{ flex: 0.7, alignItems: "center", justifyContent: "center" }}>
								<TextInput
									onChangeText={(name) => this.setState({ driverName: name })}
									value={this.state.driverName}
									style={[{
										width: '100%',
										margin: responsiveWidth(0), marginVertical: responsiveHeight(0), borderBottomColor: "#c6c6c6", borderBottomWidth: 1
									}]}>
								</TextInput>
							</View>

						</View>
						<View style={{ backgroundColor: "#f7f8fa" }}>

							<View style={{ marginVertical: responsiveHeight(3), backgroundColor: "#fff", paddingHorizontal: responsiveWidth(2.2), borderBottomWidth: 0.5, borderBottomColor: "#c6c6c6" }}>
								{/* {this.settingmapping()} */}
								<TouchableOpacity style={{ flexDirection: "column", ustifyContent: "space-between",  paddingVertical: responsiveHeight(1.5) }}>
									<View style={{ flex: 1, justifyContent: "center", }}>
										<Text style={[cstyle.boldFont, cstyle.H7Text]}>E-mail</Text>
									</View>
									<View style={{ flex: 1, justifyContent: "center", borderWidth: 1, marginTop:5, borderColor: "#c6c6c6", }}>
										<TextInput
											onChangeText={(name) => this.setState({ driverName: name })}
											value={this.state.driverName}
											style={[{
												height: 42,
												width: '100%',
												margin: responsiveWidth(0), marginVertical: responsiveHeight(0), borderBottomColor: "#c6c6c6", borderBottomWidth: 1
											}]}>
										</TextInput>
									</View>

								</TouchableOpacity>
								<TouchableOpacity style={{ flexDirection: "row", ustifyContent: "space-between", borderBottomWidth: 0.5, borderBottomColor: "#c6c6c6", paddingVertical: responsiveHeight(1.5) }}>
									<View style={{ flex: 0.38, justifyContent: "center", }}>
										<Text style={[cstyle.boldFont, cstyle.H7Text]}>Phone number</Text>
									</View>
									{/* <TouchableOpacity style={{ flex: 0.62, alignItems: "flex-end", paddingHorizontal: responsiveWidth(1) }}> */}
									{/* <TextInput
                                            onChangeText={(phone) => this.setState({ driverPhone: phone })}
                                            value={this.state.driverPhone}
                                            style={[cstyle.boldFont, cstyle.H7Text, cstyle.greyColorText]}>
                                        </TextInput> */}

									{/* </TouchableOpacity> */}

								</TouchableOpacity>
								<PhoneInput
									// ref={phoneInput}
									defaultValue={this.state.driverPhone}
									defaultCode="IN"
									layout="first"
									autoFocus={false}
									containerStyle={{
										width: '100%',
										height: 50,
										backgroundColor: 'white',
										borderWidth: 1,
										borderColor: '#c6c6c6',
									}}
									textContainerStyle={{ paddingVertical: 0 }}
									onChangeFormattedText={text => {
										this.setState({ driverPhone: text })
									}}
								/>

								<TouchableOpacity style={{ flexDirection: "row", ustifyContent: "space-between", borderBottomWidth: 0.5, borderBottomColor: "#c6c6c6", paddingVertical: responsiveHeight(1.5) }}>
									<View style={{ flex: 0.38, justifyContent: "center", }}>
										<Text style={[cstyle.boldFont, cstyle.H7Text]}>State</Text>
									</View>


								</TouchableOpacity>
								<TouchableOpacity style={{ flex: 0.50, alignItems: "flex-end", paddingHorizontal: responsiveWidth(1), borderWidth: 1 }}>
									{/* <TextInput
											onChangeText={(address) => this.setState({ driverAddress: address })}
											value={this.state.driverAddress}
											style={[cstyle.boldFont, cstyle.H7Text, cstyle.greyColorText]}></TextInput> */}
									<RNPickerSelect

										onValueChange={(value) => console.log(value)}
										items={[
											{ label: 'State 1', value: '1' },
											{ label: 'State 2', value: '2' },
											{ label: 'State 3', value: '3' },
										]}
									/>
								</TouchableOpacity>
								<TouchableOpacity style={{ flexDirection: "row", ustifyContent: "space-between", borderBottomWidth: 0.5, borderBottomColor: "#c6c6c6", paddingVertical: responsiveHeight(1.5) }}>
									<View style={{ flex: 0.38, justifyContent: "center", }}>
										<Text style={[cstyle.boldFont, cstyle.H7Text]}>City</Text>
									</View>


								</TouchableOpacity>
								<TouchableOpacity style={{ flex: 0.10, alignItems: "flex-end", paddingHorizontal: responsiveWidth(1), borderWidth: 1 }}>
									{/* <TextInput
											onChangeText={(address) => this.setState({ driverAddress: address })}
											value={this.state.driverAddress}
											style={[cstyle.boldFont, cstyle.H7Text, cstyle.greyColorText]}></TextInput> */}
									<RNPickerSelect  

										onValueChange={(value) => console.log(value)}
										items={[
											{ label: 'City 1', value: '1' },
											{ label: 'City 2 ', value: '2' },
											{ label: 'City 3', value: '3' },
										]}
									/>
								</TouchableOpacity>
								<TouchableOpacity style={{ flexDirection: "column", ustifyContent: "space-between",  paddingVertical: responsiveHeight(1.5) }}>
									<View style={{ flex: 1, justifyContent: "center", }}>
										<Text style={[cstyle.boldFont, cstyle.H7Text]}>Address</Text>
									</View>
									<View style={{ flex: 1, justifyContent: "center", borderWidth: 1, marginTop:5, borderColor: "#c6c6c6", }}>
										<TextInput
											onChangeText={(name) => this.setState({ driverName: name })}
											value={this.state.driverName}
											style={[{
												height: 42,
												width: '100%',
												margin: responsiveWidth(0), marginVertical: responsiveHeight(0), borderBottomColor: "#c6c6c6", borderBottomWidth: 1
											}]}>
										</TextInput>
									</View>

								</TouchableOpacity>
								<TouchableOpacity style={{ flexDirection: "column", ustifyContent: "space-between",  paddingVertical: responsiveHeight(1.5) }}>
									<View style={{ flex: 1, justifyContent: "center", }}>
										<Text style={[cstyle.boldFont, cstyle.H7Text]}>Pincode</Text>
									</View>
									<View style={{ flex: 1, justifyContent: "center", borderWidth: 1, marginTop:5, borderColor: "#c6c6c6", }}>
										<TextInput
											onChangeText={(name) => this.setState({ driverName: name })}
											value={this.state.driverName}
											style={[{
												height: 42,
												width: '100%',
												margin: responsiveWidth(0), marginVertical: responsiveHeight(0), borderBottomColor: "#c6c6c6", borderBottomWidth: 1
											}]}>
										</TextInput>
									</View>

								</TouchableOpacity>
							</View>
						</View>
					</ScrollView>
				</View>
				<Dialog.Container visible={this.state.dialogVisible}>
					<Dialog.Title>Take A Image </Dialog.Title>
					<Dialog.Button label="Camera" onPress={() => this.onOpenCamera()} />
					<Dialog.Button label="Gallery" onPress={() => this.onOpenGallery()} />
					<Dialog.Button label="Cancel" onPress={() => this.handleCancel()} />

				</Dialog.Container>
			</View>
		);
	}
}

const style = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: "#f7f8fa",
	},
	middle: {
		width: responsiveWidth(100),
	},
	profileview: { padding: responsiveWidth(2.5), flex: 0.3, },
	subcon1: { paddingHorizontal: responsiveWidth(2.5), },
	subcon2: { paddingHorizontal: responsiveWidth(2.5), },

	iconview: { justifyContent: "center", alignItems: "center", width: responsiveWidth(20), height: responsiveWidth(20), borderRadius: responsiveWidth(20), backgroundColor: "#4b4b4b" },


});


const cstyle = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flex: 1
	},
	profile: {
		width: responsiveWidth(10),
		height: responsiveWidth(10),
	},
	largerText: { fontSize: responsiveFontSize(5.5), fontFamily: 'SF-UI-Text-Regular', },
	enlarge: { fontSize: responsiveFontSize(8), fontFamily: 'SF-UI-Text-Regular', },
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
		fontFamily: 'SF-UI-Text-Bold'
	},
	boldFontVery: {
		fontFamily: 'SF-UI-Text-BoldCondensed'
	},
	italicFont: {
		fontFamily: 'SF-UI-Text-Italic'
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
	H8Text: { fontSize: responsiveFontSize(1.6) },
	smallText: {
		fontSize: responsiveFontSize(1.4),
	},
	smalltxt: { fontSize: responsiveFontSize(1.3) },
	leftAlign: {
		textAlign: 'left'
	},
	rightAlign: {
		textAlign: 'right'
	},
	centerAlign: {
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: "center",
	},
	underlineText: {
		textDecorationLine: 'underline'
	},
	colorText: {
		color: "#FFF",
	},
	greyColorText: {
		color: "#8e8f91",
	},
	blackColorText: {
		color: "#444444",
	},
	blueColorText: {
		color: '#ffd428'
	},



	spinnerTextStyle: {
		color: '#FFF'
	},
	validationErrorMessage: {
		color: 'red'
	},
	margin: { margin: 10 },
	marginVertical: responsiveHeight(10),
	smallPadder: { paddingHorizontal: responsiveWidth(2.5) },
	padder: { paddingHorizontal: responsiveWidth(5) },
	extraPadder: { paddingHorizontal: responsiveWidth(10) },
	extraPadding: { paddingHorizontal: responsiveWidth(10), paddingVertical: responsiveHeight(5) },
	padding: {
		paddingTop: responsiveHeight(4)
	},

	//Slider Component
	marginTop: { marginTop: responsiveHeight(10), },
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
		justifyContent: "center",
		alignSelf: "center"
	},
	sliderContent: {
		paddingTop: responsiveHeight(3),
		width: responsiveWidth(100),
		height: responsiveHeight(20),
		justifyContent: 'center',
		alignItems: 'center'

	},
	sliderfooter: { position: 'absolute', bottom: 20, justifyContent: "center", alignSelf: "center", backgroundColor: 'transparent', height: responsiveHeight(10) },


	//SideBar Component
	drawericon: { marginLeft: 20, width: responsiveWidth(20), height: responsiveWidth(20) },
	closebtn: {
		padding: 20
	},
	iconFontSize: {
		fontSize: 26
		, width: responsiveWidth(10)
	},
	sidebarText: {
		//fontWeight: '400',
		marginLeft: 5
	},
	signinText: {
		padding: 20
	},
	drawerterms: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10
	},
	sideBarFooter: {
		height: '15%',
		padding: 15,
		backgroundColor: "#fff"
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
		top: responsiveHeight(65)

	},
	darkColorText: {
		color: "#111111"
	},
	grayColorText1: {
		color: '#666'
	}
});
export default EditProfile;

