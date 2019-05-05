const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")

const moviesObject = {
  title: true,
  year: true,
  director: true,
  duration: true,
  genre: true,
  rate: true,
  image_url: true
}


 router.get('/', (req, res, next) => {
   res.render('index');
 });

router.get("/all", (req, res, next) => {
  Movie
    .find({})
    .then(allTheMovies => {
      res.json(allTheMovies)
    })
});

router.get("/one/:id", (req,res, next) => {
  Movie
    .findById(req.params.id)
    .select(moviesObject)
    .then(allTheMovies => res.json(allTheMovies))
})

router.post("/new", (req, res, next) => {
  Movie
    .create({title: req.body.name, year: req.body.year, director: req.body.director, duration: req.body.duration, genre: req.body.genre, rate: req.body.rate, image_url: req.body.image_url})
    .then((newMovie) => {
      Movie
        .findById(newBeer._id)
        .select(moviesObject)
        .then(theNewMovie => res.json(theNewMovie))
    })
})

router.delete("/delete/:id", (req, res) => {
  Movie
    .findByIdAndDelete(req.params._id)
    .then(res.json({message: "Movie has been deleted!"}))
    .catch(error => ({error: "Movie not found"}))
})


router.put("/update/:id", (req, res) => {
  Movie
    .findByIdAndUpdate(req.params._id ,req.body, {new: true})
    .then(res.json({message: "Movie has been updated!"}))
    .catch(error => ({error: "Movie not found"}))
})
module.exports = router;
