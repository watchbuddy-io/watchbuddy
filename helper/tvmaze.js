const request = require('request');
const config = require('../config.js');

let getInfoByTitle = (title, callback) => {

	let options = {
    url: `https://api.themoviedb.org/3/tv/popular?api_key=${config.TOKEN}&language=en-US&page=1`,
    headers: {
      'User-Agent': 'request',
    }
  }
	request(options, (err, res, body) => {
		callback(body)
	})
}


module.exports.getInfoByTitle = getInfoByTitle;