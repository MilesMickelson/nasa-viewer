const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/apod', (req, res) => {
  astronomy = req.query.apod;
	var url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`	
  axios.get(url)
    .then((response) => {
      res.send(response.data);
      })
    .catch((error) => {
      console.error(error);
      res.send('An error occured.');
      })
});

module.exports = app;