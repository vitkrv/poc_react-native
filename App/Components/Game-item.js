import React from 'react';

import {
	Text,
	View,
	Image,
	ListView,
	ScrollView,
	StyleSheet,
	TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row'
	},
	name: {
		position: "absolute",
		bottom: 0,
		right: 0,
		left: 0,
		fontSize: 21,
		height: 40,
		color: 'white',
		backgroundColor: 'black'
	},
	image: {
		flex: 1,
		width: null,
		height: null
	}
});

export default class GameItem extends React.Component {

	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.image} resizeMode={Image.resizeMode.cover} source={{uri: "http://placehold.it/1500x500"}}>
					<Text style={styles.name}> {this.props.gameInfo.name} </Text>
				</Image>
			</View>
		)
	}
}

GameItem.propTypes = {
	gameInfo: React.PropTypes.object.isRequired
};