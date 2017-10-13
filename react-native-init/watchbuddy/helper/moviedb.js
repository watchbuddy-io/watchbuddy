const request = require('request');
const config = require('../server/config.js');
const strictUriEncode = require('strict-uri-encode');


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


let discoverMoviesByGenre = (genres, callback) => {
	let uriString = strictUriEncode(genres.join(','));

	console.log(uriString)

	let options = {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${config.TOKEN}&&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80`,
    headers: {
      'User-Agent': 'request'
    }
  }

	request(options, (err, res, body) => {
		if (err) {
			console.log('error in GET request to movieDB API on discoverMoviesByGenre in moviedb.js', err)
		} else {
			callback(err, body)
		}
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

let details = (id, callback) => {
	let options = {
		url: `https://api.themoviedb.org/3/tv/${id}?api_key=${config.TOKEN}&language=en-US`,
		headers: {
			'User-Agent': 'request'
		}
	}
	request(options, (err, res, body) => {
		callback(body)
	})
}

let episode = (id, season, episode, callback) => {
	let options = {
		url: `https://api.themoviedb.org/3/tv/${id}/season/${season}/episode/${episode}?api_key=${config.TOKEN}&language=en-US`,
		headers: {
			'User-Agent': 'request'
		}
	}
	request(options, (err, res, body) => {
		if (err) {
			callback(err)
		} else {
			callback(body)
		}
	})
}

module.exports.getInfoByTitle = getInfoByTitle;
module.exports.getPopularShows = getPopularShows;
module.exports.genre = genre;
module.exports.search = search;
module.exports.details = details;
module.exports.episode = episode;
module.exports.discoverMoviesByGenre = discoverMoviesByGenre;