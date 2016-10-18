import mockGames from './mockGames.json'

const API_ROUTES = {
	games: 'http://10.40.222.126:8080/casapp/api/client/games'
};

var parseJSON = function (res) {
	return res.json();
};

var api = {
	getGames(){
		return fetch(API_ROUTES.games).then(parseJSON).catch(() => mockGames);
	}
};


module.exports = api;