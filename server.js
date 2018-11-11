const express = require('express');
const request = require('request');
const bodyParser = require('body-parser')
const { mongoose } = require('./db/mangoose');
const { Movie } = require('./models/movie');

const app = express();
app.use(bodyParser.json());

const apiKey = 'bd542a94';
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello Google Home');
});

// Get all movies in your watch list
app.get('/movies', (req, res) => {
    Movie.find().then((movies) => {
        res.send({movies});
    }, (err) => {
        res.status(400).send(err);
    });
});

// Add a movie to watchlist
app.post('/add/:movie', (req, res) => {
    const { movie } = req.params;
    const url = `http://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`;
    request({
        url,
        json: true
    }, (error, response, body) => {
        const newMovie = new Movie({
            name: movie,
            details: response.body
        });

        newMovie.save().then((doc) => {
            res.send(doc);
        }, (err) => {
            res.status(400).send(err);
        })
    });
});

// Search about a movie
app.get('/new/:movie', (req, res) => {
    const { movie } = req.params;
    const url = `http://www.omdbapi.com/?t=${movie}&&apikey=${apiKey}`;
    request({
        url,
        json: true
    }, (error, response, body) => {
        res.send(response.body);
    });
});

// starting a server
app.listen(PORT, () => {
    console.log('Server is running on PORT: ' + PORT);
});