const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql');
const moviedb = require('../helper/moviedb.js');


const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/recommend', function (req, res) {
	moviedb.getPopularShows((data) => {
		console.log(JSON.parse(data).results[1].genre_ids);
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

app.get('/genre', function (req, res) {
	moviedb.test((err, data) => {
		if (err) {
			console.log(err);
		} else {
			console.log(data)
		}
	})
})


app.listen(3000, function() {
  console.log('listening on port 3000!');
})

