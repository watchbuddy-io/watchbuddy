const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database-mysql');
const moviedb = require('../helper/moviedb.js')
// var items = require('../database-mongo');

const app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', function (req, res) {
	moviedb.getInfoByTitle('Game of thrones', (data) => {
		console.log(JSON.parse(data))
	})
	
});

app.post('/submit', function (req, res) {
	var title = req.body.topic.split(' ').join('_')
	moviedb.getInfoByTitle(title, (data) => {
		console.log(JSON.parse(data))
	})
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

