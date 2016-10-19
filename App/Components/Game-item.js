import React from 'react';

import {
	Text,
	View,
	Image,
	ListView,
	ScrollView,
	StyleSheet,
	TouchableOpacity
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
		fontSize: 20,
		height: 30,
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
	onItemClick() {
		this.props.navigator.push({
			id: 'game-details',
			title: "Game details",
			gameInfo: this.props.gameInfo
		})
	}

	render() {
		return (
			<TouchableOpacity style={styles.container}
												onPress={this.onItemClick.bind(this)}>
				<Image style={styles.image} resizeMode={Image.resizeMode.cover} source={{uri: "http://placehold.it/200x200"}}>
					<Text style={styles.name}> {this.props.gameInfo.name} </Text>
				</Image>
			</TouchableOpacity>
		)
	}
}

GameItem.propTypes = {
	gameInfo: React.PropTypes.object.isRequired
};