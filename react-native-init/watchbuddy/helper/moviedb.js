const axios = require('axios');
const config = require('../server/config.js');
const genreNames = require('../data/genreNames.js');

let searchMovies = (title) => {
  return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${config.TOKEN}&query=${title}&language=en-US&page=1`);
}

let getMovieImages = (movieId) => {
	return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${config.TOKEN}`);
}

module.exports = {
	searchMovies,
	getMovieImages,
}
