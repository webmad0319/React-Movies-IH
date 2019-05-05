const express = require("express");
const passport = require('passport');
const router = express.Router();
const Movie = require("../models/Movie");

router.get('/all', (req, res, next) => {
  Movie
    .find()
    .then(allTheMovies => 
      res.json(allTheMovies))
});

router.get('/one/:id', (req, res, next) => {
  Movie
    .findById(req.params.id)
    .then(Movie => res.json(Movie))
});


router.post('/new', (req, res) => {
  console.log(req.body, "body")
  const {title,year,director,duration,genre,rate,image_url} = req.body;
  const movie = {
    title,
    year,
    director,
    duration,
    genre,
    rate,
    image_url
    
  }
  const newMovie = new Movie(movie);
  newMovie.save()
  .then((movie) => {
    res.json(movie);
  })
});

router.delete('/delete/:id', (req, res,next) => {
  const id = req.params.id;
  Movie.findByIdAndRemove(id)
  .then((movie) =>{
    res.json(movie);
  })
  .catch((err) => {
    console.log("no se ha borrado");
  })
});


router.put('/edit/:id', (req,res) => {
const id = req.params.id
  
  Movie.findByIdAndUpdate(id, req.body)
  .then((movie) =>{
    console.log(movie)
    res.json(movie);
  })
  .catch((err) =>{
    console.log(err);
  })
})



module.exports = router;
