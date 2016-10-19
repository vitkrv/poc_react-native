import React from 'react';

import {
	Text,
	View,
	Image,
	BackAndroid,
	StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	},
	name: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		justifyContent: 'center',
		padding: 10,
		height: 60,
		fontSize: 26,
		color: 'white',
		backgroundColor: 'black'
	},
	image: {
		height: 150,
		flexDirection: 'row',
		alignSelf: 'stretch',
		justifyContent: 'center',
		flex: 1
	},
	descrition: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		justifyContent: 'center',
		padding: 10,
		flex: 1
	}
});


export default class GameDetails extends React.Component {
	componentDidMount() {
		BackAndroid.addEventListener('hardwareBackPress', () => {
			this.props.navigator.pop();
			return true;
		});
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.name}>{this.props.gameInfo.name}</Text>
				<Image style={styles.image} resizeMode={Image.resizeMode.cover} source={{uri: "http://placehold.it/800x800"}}/>
				<Text style={styles.descrition}> {this.props.gameInfo.description} </Text>
			</View>
		)
	}
}

GameDetails.propTypes = {
	gameInfo: React.PropTypes.object.isRequired
};