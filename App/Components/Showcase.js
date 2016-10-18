import React from 'react';
import api from '../Utils/api';
import GameItem from './Game-item';

import {
	Text,
	View,
	ListView,
	ScrollView,
	StyleSheet,
	Image,
	TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'powderblue'
	},
	item: {
		flex: 0.5,
		height: 200,
		margin: 10,
		borderWidth: 2,
		borderColor: 'steelblue'
	},
	itemText: {
		fontSize: 20
	}
});

export default class Showcase extends React.Component {
	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1.code !== row2.code});
		this.state = {
			dataSource: this.ds.cloneWithRows([{name: 'game'}]),
			isLoading: false,
			error: false
		}
	}

	renderItem(item) {
		return (
			<View style={styles.item}>
				<GameItem gameInfo={item}></GameItem>
			</View>
		)
	}

	render() {
		api.getGames().then((res) => this.setState({dataSource: this.ds.cloneWithRows(res.slice(0, 20))}));
		return (
			<ScrollView>
				<ListView
					contentContainerStyle={styles.container}
					dataSource={this.state.dataSource}
					renderRow={this.renderItem}
					enableEmptySections={true}/>
			</ScrollView>
		)
	}
}
