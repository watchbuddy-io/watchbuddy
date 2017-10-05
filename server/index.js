const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql');
const moviedb = require('../helper/moviedb.js');


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
				array.push(obj)
			})
			res.send(array)
		})
	})
})


app.post('/submit', function (req, res) {
	var title = req.body.topic.split(' ').join('_')
	moviedb.getInfoByTitle(title, (data) => {
		res.send(JSON.parse(data))
	})
})


app.post('/signUp', function (req, res) {
	var user = req.body.username;
	var pw = req.body.password;
	db.createUser(user, pw, (err, data) => {
		if (err) {
			res.send(err);
		} else {
			res.send(data);
		}
	})
})



app.post('/logIn', function (req, res){
	var user = req.body.username;
	var pw = req.body.password;
	db.checkUser(user, pw, (err, data) => {
		if (err){
			res.send(err);
		} else {
			res.send(data);
		}
	})
})




app.listen(3000, function() {
  console.log('listening on port 3000!');
})

