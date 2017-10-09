const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const db = require('../database-mysql');
const moviedb = require('../helper/moviedb.js');
const utils = require('./hashUtils.js')

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/recommend', function (req, res) {
	var genres;
	moviedb.genre((data) => {
		genres = JSON.parse(data).genres
		moviedb.getPopularShows((data) => {
			var top = JSON.parse(data).results.splice(0, 5)
			var array = [];
			top.forEach((el) => {
				var obj = {};
				obj.name = el.name;
				var arr = [];
				el.genre_ids.forEach((int) => {
					for (var i = 0; i < genres.length; i++) {
						if (genres[i].id === int){
							arr.push(genres[i].name)
						}
					}
				})
				obj.genres = arr
				obj.summary = el.overview;
				obj.firstAirDate = el.first_air_date;
				obj.image = "https://image.tmdb.org/t/p/w500/" + el.backdrop_path;
				obj.id = el.id
				array.push(obj)
			})
			res.send(array)
		})
	})
})


app.post('/search', function (req, res) {
	console.log(req.body.term)
	var title = req.body.term
	var genres;
	moviedb.genre((data) => {
		genres = JSON.parse(data).genres
		moviedb.search(title, (data) => {
			var searched = JSON.parse(data).results.splice(0, 10);
			var array = [];
			searched.forEach((el) => {
				var obj = {};
				obj.name = el.name;
				obj.id = el.id;
				var arr = [];
				el.genre_ids.forEach((int) => {
					for (var i = 0; i < genres.length; i++) {
						if (genres[i].id === int) {
							arr.push(genres[i].name)
						}
					}
				})
				obj.genres = arr
				obj.summary = el.overview;
				obj.firstAirDate = el.first_air_date;
				obj.image = "https://image.tmdb.org/t/p/w500/" + el.backdrop_path;
				array.push(obj)
			})
			res.send(array);
		})
	})
})


app.post('/signUp', function (req, res) {
  var salt = utils.createRandom32String(); // create salt
  var user = req.body.email;
  var pw = utils.createHash(req.body.password, salt);
  var array = [];
  array.push(user);
  array.push(pw);
  array.push(salt);
  db.createUser(array, (data) => {
     res.send(user);
  })
})


app.post('/logIn', function (req, res){
  var user = req.body.email;
  var pw = req.body.password;
  var salt = '';
  var hash = '';
  var array = [];
  array.push(user);
  db.checkUser(array, (data) => {
    if (data.length === 0) {
      res.status(400)
      res.send()
    } else {
      hash = data[0].password;
      salt = data[0].salt;
      if (utils.compareHash(pw, hash, salt)) {
        res.send(user);
      } else {
        res.status(400);
        res.send()
      }
    }
  })
})


app.post('/add', function (req, res){
	var id = req.body.id
	moviedb.details(id, (data) => { 
		var info = JSON.parse(data);
		var detail = {};
		var obj = {};
		info.seasons.forEach((el) => {
			obj[el.season_number + 1] = [el.episode_count, "https://image.tmdb.org/t/p/w500" + el.poster_path];
		})
		detail.seasons = obj;
		detail.runtime = info.episode_run_time[0];
		res.send(detail)
	})
})


app.post('/addshow', function(req, res){
	var array = [];
	for (var x in req.body){
		if (x !== 'username' && x !== 'showName') {
			if (x === 'startDate') {
				console.log(req.body[x])
				if (req.body[x] === ''){
					var current = JSON.stringify(moment()).substr(1, 10);
					array.push(current)
				} else {
					var start = req.body[x].substr(0, 10);
					array.push(start)
				}
			} else if (x === 'endDate'){
				var end = req.body[x].substr(0, 10);
				array.push(end)
			} else {
				array.push(req.body[x]);
			}
		}
	}
	array.push(req.body.username);
	db.addSurveyData(array, (data) => {
		var titleId = array[0];
		var season = array[1];
		var episode = array[2];
		var title = req.body.showName
		var object = {};
		moviedb.episode(titleId, season, episode, (data) => {
			if (JSON.parse(data).status_code !== 34){	
				var info = JSON.parse(data)
				var first = [];
				first.push(title, info.season_number, info.episode_number, info.name, info.overview);
				first.push("https://image.tmdb.org/t/p/w500" + info.still_path)
				object.first = first;
				episode++;
				moviedb.episode(titleId, season, episode, (data) => {
					if (JSON.parse(data).status_code === 34){
						season++;
						episode = 1;
						moviedb.episode(titleId, season, episode, (data) => {
							if (JSON.parse(data).status_code === 34){
								object.second = 'finished';
								console.log(object)
								res.send(object)
							} else {
								var info = JSON.parse(data)
								var second = [];
								second.push(title, info.season_number, info.episode_number, info.name, info.overview);
								second.push("https://image.tmdb.org/t/p/w500" + info.still_path)
								object.second = second;
								console.log(object)
								res.send(object)
							}
						})
					} else {
						var info = JSON.parse(data)
						var second = [];
						second.push(title, info.season_number, info.episode_number, info.name, info.overview);
						second.push("https://image.tmdb.org/t/p/w500" + info.still_path)
						object.second = second;
						console.log(object)
						res.send(object)
					}
				})
			} else {
				res.send('That episode has not aired yet')
			}
		})
	})
})

app.post('/update', function (req, res) {

})

app.listen(3000, function() {
  console.log('listening on port 3000!');
})










