const request = require('request');
const config = require('../config.js');


let getInfoByTitle = (title, callback) => {
	let options = {
		url: `https://api.themoviedb.org/3/find/en/${title}?api_key=${config.TOKEN}&external_source=freebase_id`,
		headers: {
      'User-Agent': 'request'
    }
	}
	request(options, (err, res, body) => {
		callback(body)
	})
}


let getPopularShows = (callback) => {

	let options = {
    url: `https://api.themoviedb.org/3/tv/popular?api_key=${config.TOKEN}&language=en-US&page=1`,
    headers: {
      'User-Agent': 'request'
    }
  }
	request(options, (err, res, body) => {
		callback(body)
	})
}

let genre = (callback) => {
	let options = {
		url: `https://api.themoviedb.org/3/genre/tv/list?api_key=${config.TOKEN}&language=en-US`,
		headers: {
			'User-Agent': 'request'
		}
	}
	request(options, (err, res, body) => {
		callback(body)
	})
}

let search = (title, callback) => {
	let options = {
		url: `https://api.themoviedb.org/3/search/tv?api_key=${config.TOKEN}&query=${title}&language=en-US&page=1`,
		headers: {
			'User-Agent': 'request'
		}
	}
	request(options, (err, res, body) => {
		callback(body)
	})
}

module.exports.getInfoByTitle = getInfoByTitle;
module.exports.getPopularShows = getPopularShows;
module.exports.genre = genre;
module.exports.search = search;