import React from 'react';
import {
	View,
	FlatList,
	StyleSheet,
	Image,
	Text,
	TouchableOpacity,
	ScrollView
} from 'react-native';

import { CartItem } from '../reuse/CartItem';
import { Wrapper, Header, Left, Container, Right, Space, Row, Column, Touchable, H1, P, H4, Footer, Sm, Center, Btn, IconBtn } from '../utils';
import sample_data from '../../sample_data';
import config from '../../config';
// import { Icon } from 'react-native-vector-icons/icon';
import Icon from 'react-native-vector-icons/dist/Feather';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import { scale } from 'react-native-size-matters';


export default class OurPlant extends React.Component {

	state = {
		_showQuantityModal: false,
		curItem: {},
		curItemQty: 0,
		cart: sample_data.cart,
		cartInProgressItems: [],
		plant: [
			{ id: 1, name: "Clove", image: require("../../assets/img/ourplant/karanfilic.png"), subName: "(Syzygium aromaticum)", Description: "Clove will successfully establish good digestion, protect the liver and prevent cirrhosis, strengthen immunity, strengthen bones, speed up circulation, clean the airways, but also reduce inflammation, muscle pain, headaches, toothaches, eliminate bad breath… Eugenol has been shown to fight more effectively free radicals from vitamin E, so it also has anticancer properties. In addition, this fragrant bud contains numerous vitamins and minerals: C, B6, E, K, folic acid, thiamine, riboflavin, niacin, selenium, mangan, copper, zinc, iron, calcium, phosphorus… But the greatest power of clove is visible when it encounters parasites, bacteria, fungi, including streptococci, staphylococci, pneumococci, candida, listeria, Helicobacter pylori, salmonella, and Escherichia coli, which destroy everything quickly and efficiently. In addition to helping us with infections of the oral cavity, it is also very effective on the skin." },
			{ id: 2, name: "Sage", image: require("../../assets/img/ourplant/zalfija.png"), subName: "(Salvia officinalis)", Description: "Sićevo gorge in southern Serbia is the largest natural area covered in sage outside the Mediterranean. Sage has always grown in the Mediterranean belt and has been famous far and wide. The Chinese valued it so much that they would trade three crates of their tea for one crate of sage with Dutch merchants. According to many folklore traditions, sage is synonymous with longevity and immortality.\n\n\Today, when we are painfully aware of the fact that bacteria are increasingly resistant to modern antibiotics, sage is here to save us again. The essential oil of this plant very strongly prevents the growth of pathogenic bacteria and thus stops bacterial and fungal infections. Numerous modern studies have proven that sage successfully helps heal wounds and prevents infections, especially when it comes to staphylococci; it is also effective in treating herpes." },
			{ id: 3, name: "Lavender", image: require("../../assets/img/ourplant/lavanda.png"), subName: "(Lavandula angustifolia)", Description: "When we think of lavender, probably the first thing that comes to mind are the wide purple fields of Provence. But the story of this fragrant plant begins much earlier, and much further afield, in the lands of ancient Egyptians, Arabs and Hindus, over two and a half millennia ago. They were the first to plant and harvest it and make aromatic oils from it; they used it as a perfume, medicine and for mummification. Through them, it reached ancient Greeks and Romans, who further spread it throughout Europe around 600 BC. This hardy plant quickly took root in the Mediterranean belt, where hot summers suited it; even summer fires could not destroy it: on the contrary, it would germinate, flourish and spread even more after a fire.\n\nLavender bath has an anti-inflammatory effect, as shown by research conducted at the University of Trieste. As an antiseptic, lavender can prevent wound infections and injuries, and has a soothing effect on irritated and dry skin, both for acute irritations or burns and chronic conditions such as psoriasis, eczema or acne. It has also proved to be good for blemishes and sun spots. It will reduce itching and swelling after insect bites. It is also great for hair and prevents dandruff and hair loss." },
			{ id: 4, name: "Bergamot Orange", image: require("../../assets/img/ourplant/bergamot.png"), subName: "(Citrus bergamia)", Description: "A study in Britain found that Earl Gray tea protects against cardiovascular disease precisely because it contains bergamot. Citrus bergamia is a tree and fruit from the citrus family, it looks like a small orange, but is lime-coloured. Although it is full of vitamins C, B1, B2, A and potassium, the fruit is not eaten fresh due to its very strong, sour taste. That is why it is usually candied and is a common ingredient in Turkish delight, while its skin is used to make an aromatic and refreshing oil.\n\nA few drops of this essential oil mixed with olive oil helps digestion, reduces gas and bloating. If rubbed into a sore spot it can help with headaches, muscle and joint aches. Its antibacterial and antiviral properties are the reason why it is often part of deodorants, soaps and body care oils. But bergamot oil has another important quality when it comes to our skin: it effectively promotes the healing of wounds, acne scars, it neutralises hyperpigmentation and smooths out stretch marks. Its regenerative and anti-inflammatory properties help with eczema and skin inflammations." },
			{ id: 5, name: "Rosemary", image: require("../../assets/img/ourplant/ruzmarin.png"), subName: "(Rosmarinus officinalis)", Description: "In ancient Greece, students used to wear rosemary wreaths on the head to improve memory and young women used to give it to their boyfriends who were going to war lest they should forget them. Once upon a time, a rosemary bush in the garden in front of the house symbolised the domination by woman, landlady of the house. Roman priests used it in religious ceremonies instead of incense; in England, rosemary was used to fumigate the house after severe illnesses. In Christianity, this plant is associated with Christ and his mother…\n\nThis plant grows abundantly on its own and flourishes in the Mediterranean belt, where it is widely used not only in cosmetics, as a perfume, medicine or insect repellent, but also as an obligatory spice in cooking. Rosemary improves blood circulation in the skin, it promotes regeneration, it soothes and heals. It can be of great help to treat burns, wounds, eczema, dermatitis and psoriasis, but it also has the power to drive away morning fatigue, to normalise low blood pressure and to restore energy because it dilates blood vessels." },
			{ id: 6, name: "Mandarin Orange", image: require("../../assets/img/ourplant/mandarina.png"), subName: "(Citrus reticulata)", Description: "When Sir Abraham Hume, an English floriculturist and Member of Parliament, brought mandarin samples from China to England in 1805, Europe immediately fell in love with the fragrant fruit. Immediately afterwards, mandarin arrived in Malta, then in the south of Italy, from where it spread to the Mediterranean, where it is still grown in abundance. In 1840, the Italian consul took it to the United States where plantations were created in the south, in Florida and in California. It was given its name because of the characteristic colour of its skin, which resembles the robes worn by Mandarin dignitaries, educated public figures in the Chinese court.\n\nMandarin is delicious and great to eat and is also extremely beneficial for the skin. Mandarin essential oil immediately captivates us with its scent, which awakens optimism and fills us with joy. If applied correctly to the skin, its beneficial effect will help us with increased sebum, acne, clogged pores, inflammations and infections, scars, wrinkles, stretch marks, burns, cellulite…" },
			{ id: 7, name: "Evening Primrose", image: require("../../assets/img/ourplant/nocurak.png"), subName: "(Oenothera biennis)", Description: "It opens its flower when everyone goes to sleep. Evening primrose, as its name suggests, is a nocturnal plant. Its nectar attracts moths that pollinate it. Before dawn, the pollinated flowers wither, and by the next evening new ones sprout. This beautiful plant originates from North America; it was brought to Europe as an ornamental plant. Many have it in their gardens, unaware of its power.\n\nEvening primrose, Oenothera biennis, is rich in gamma-linolenic acid, an essential fatty acid necessary for the normal functioning of the body. It protects against cardiovascular diseases, prevents blood clots, lowers blood pressure, strengthens immunity, improves brain function, regulates hormones… and is very important for the skin. Science has confirmed that disorders in the metabolism of essential fatty acids can cause inflammatory changes in the skin. Today, evening primrose oil is known to be very useful for soothing skin inflammations, psoriasis, eczema, dermatitis, rosacea, dandruff and itching. Evening primrose is great for the skin prone to flaking and cracking." },
			{ id: 8, name: "Wheat", image: require("../../assets/img/ourplant/psenica.png"),  },
			{ id: 9, name: "Fenugreek", image: require("../../assets/img/ourplant/piskavica.png"), },
			{ id: 10, name: "Willow Bark", image: require("../../assets/img/ourplant/vrba.png"), },
			{ id: 11, name: "Small-flowered Willow-herb", image: require("../../assets/img/ourplant/epilobium.png"),},
			{ id: 12, name: "Lady's Bedstraw", image: require("../../assets/img/ourplant/ivanjskocvetje.png"), },
		]

	}

	render() {


		return (

			<View style={{ backgroundColor: "#fff", flex: 1 }}>
				{/* <Header> */}
				<View style={{ flexDirection: "row", }}>
					<View style={{ width: scale(30) }}>
						<IconBtn icon={global.backIcon}
							onPress={() => this.props.navigation.goBack()}
						/>
					</View>
					<View style={{ width: scale(300), justifyContent: "center", alignItems: "center" }}>
						<Text style={{ fontSize: scale(20) }}>Our Plant</Text>

					</View>
				</View>

				{/* </Header> */}
				<Space />
				<Container>
					<ScrollView>
						<View style={{ flexDirection: "row", width: "100%", flexWrap: "wrap", justifyContent: "space-evenly" }}>
							{this.state.plant.map((item, index) => {
								return (
									<TouchableOpacity

										onPress={() => {
											if(item.subName)
											this.props.navigation.navigate("PlantDescription", { details: item })
										}}
										style={[{ width: scale(90), height: scale(100), marginVertical:scale(10),padding: scale(10), justifyContent: "center", alignItems: "center", borderRadius: scale(120), margin: 5 },]}>
										<Image source={item.image} style={{ width: scale(90), height: scale(90), resizeMode: "cover" }} />

										{/* <FontistoIcon name={props.IconName} style={{ fontSize: 24, color: "#fefefe" }} />
						*/}
						<Text style={{ fontSize: scale(13), fontWeight: "bold",   textAlign: "center" }}>{item.name}</Text> 
									</TouchableOpacity>
								)
							})}

						</View>
					</ScrollView>
				</Container>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	noItemsWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	noItemsHeading: {
		color: '#444444',
		fontSize: 20,
		marginTop: 10,
	},
	noItemsText: {
		color: '#666666',
		marginTop: 10,
		marginBottom: 15
	}
});