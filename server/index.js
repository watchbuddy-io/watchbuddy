const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database-mysql');
const tvMaze = require('../helper/tvmaze.js')
// var items = require('../database-mongo');

const app = express();


// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.json());


app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', function (req, res) {
	tvMaze.getInfoByTitle('Game of thrones', (data) => {
		console.log(JSON.parse(data))
	})
	
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

