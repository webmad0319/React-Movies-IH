const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie")

router.get('/all', (req, res, next) => {
  Movie
    .find()
    .then(allTheMovies => res.json(allTheMovies))
});

router.get('/:id', (req, res, next) => {
  Movie
    .findById(req.params.id)
    .then(oneMovies => res.json(oneMovies))
});

router.post('/new', (req, res, next) => {
  Movie
    .create({
      title: req.body.title,
      year: req.body.year,
      director: req.body.director,
      duration: req.body.duration,
      rate: req.body.rate,
      genre: req.body.genre,
      image_url: req.body.image_url,
    })
    .then((newMovie) => {
      Movie
        .findById(newMovie._id)
        .then(theNewMovie => res.json(theNewMovie))
    })
});

router.delete('/:id', (req, res, next) => {
  Movie
    .findByIdAndDelete(req.params.id)
    .then(deletedMovies => res.status(200).json("ok"))
});

module.exports = router;
