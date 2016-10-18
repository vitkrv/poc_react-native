import React from 'react';
import api from '../Utils/api';
import GameItem from './Game-item';
import ImageSlider from 'react-native-image-slider';

import {
	Text,
	View,
	ListView,
	ScrollView,
	StyleSheet,
	Image,
	TouchableHighlight,
	Dimensions
} from 'react-native';

const width = Dimensions.get('window').width;

var styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: 'whitesmoke',
		marginTop: 220
	},
	carousel: {
		height: 220
	},
	stickyHeader: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		height: 300,
		zIndex: 10
	},
	item: {
		backgroundColor: 'red',
		width: (width / 2) - 15,
		height: 200,
		marginLeft: 10,
		marginTop: 10,
		borderWidth: 1,
		borderColor: 'snow'
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
			dataSource: this.ds.cloneWithRows([]),
			isLoading: false,
			error: false,
			position: 0,
			interval: null
		}
	}

	componentWillMount() {
		this.setState({
			interval: setInterval(() => {
				this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
			}, 2000)
		});
	}

	componentWillUnmount() {
		clearInterval(this.state.interval);
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
				<View style={styles.stickyHeader}>
					<ImageSlider images={[
						'http://placeimg.com/400/220/any',
						'http://placeimg.com/400/221/any',
						'http://placeimg.com/400/222/any']}
											 style={styles.carousel}
											 position={this.state.position}
											 height={220}
											 onPositionChanged={position => this.setState({position})}/>
				</View>
				<ScrollView>
					<ListView
						contentContainerStyle={styles.container}
						dataSource={this.state.dataSource}
						renderRow={this.renderItem}
						enableEmptySections={true}/>
				</ScrollView>
			</ScrollView>
		)
	}
}
