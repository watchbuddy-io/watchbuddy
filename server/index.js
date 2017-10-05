const express = require('express');
const bodyParser = require('body-parser');
<<<<<<< HEAD
const db = require('../database-mysql');
const moviedb = require('../helper/moviedb.js');
=======
const items = require('../database-mysql');
const tvMaze = require('../helper/tvmaze.js')
>>>>>>> 0230dded18c1bbebab6faa3938b1017ed5a84b2f
// var items = require('../database-mongo');

const app = express();

<<<<<<< HEAD
app.use(bodyParser.json());
=======
<<<<<<< HEAD
// UNCOMMENT FOR REACT
>>>>>>> 0230dded18c1bbebab6faa3938b1017ed5a84b2f
app.use(express.static(__dirname + '/../react-client/dist'));
=======
app.use(bodyParser.json());
>>>>>>> added api

<<<<<<< HEAD

app.get('/recommend', function (req, res) {
	moviedb.getPopularShows((data) => {
		res.send(JSON.parse(data));
=======
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', function (req, res) {
	tvMaze.getInfoByTitle('Game of thrones', (data) => {
		console.log(JSON.parse(data))
>>>>>>> 0230dded18c1bbebab6faa3938b1017ed5a84b2f
	})
	
});

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
});

