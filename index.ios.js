import Showcase from './App/Components/Showcase';
import GameDetails from './App/Components/Game-details';

import {
	AppRegistry,
	StyleSheet,
	Navigator
} from 'react-native';

export default class POC_CASAPP_iOS extends Component {
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
				return (<Showcase navigator={navigator}/>);
			case 'game-details':
				return (<GameDetails navigator={navigator} gameInfo={route.gameInfo}/>);
		}
	}
}

AppRegistry.registerComponent('POC_CASAPP_iOS', () => POC_CASAPP_iOS);
