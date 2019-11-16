const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

const dataCache = {};

app.get('/apod', (req, res) => {
	astronomy = req.params.apod;
	const API_KEY = process.env.NASA_API_KEY;
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
	  .then((result) => {
		res.status(200).send(result.data);
	})
	  .catch((err) => {
		res.status(404).send('API data call was unsuccessful');
	})
});

  app.get('*', function( req, res){
  res.status(404).send('404 Error: Sorry, page was not found');
});

module.exports = app;
