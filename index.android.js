import React from 'react';

import Showcase from './App/Components/Showcase';

import {
	AppRegistry,
	StyleSheet,
	Text,
	Navigator,
	View
} from 'react-native';


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});

export default class POC_CASAPP_Android extends React.Component {
	render() {
		return (
			<Navigator
				initialRoute={{id: 'showcase'}}
				renderScene={this.navigatorRenderScene}
			/>
		);
	}

	navigatorRenderScene(route, navigator) {
		_navigator = navigator;
		switch (route.id) {
			case 'showcase':
				return (<Showcase navigator={navigator} title="Showcase"/>)
		}
	}
}

AppRegistry.registerComponent('POC_CASAPP_Android', () => POC_CASAPP_Android);
