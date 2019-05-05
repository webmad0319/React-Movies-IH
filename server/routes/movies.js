const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

router.get('/all', (req, res, next) => {
  
  Movie.find()
  .then(movies=>{
      res.json(movies);
  })
  .catch((err)=>{
    console.log(err);
  })
});

router.get('/one/:id', (req, res, next) => {
  let id = req.params.id;

  Movie.findById(id)
  .then(movie=>{
    res.json(movie);
  })
  .catch((err)=>{
    console.log(err);
  })
});

// router.get('/one/:id ', (req, res, next) => {
//   const data = {
//     action: "new"
//   }
//   res.render(data);
// });

router.post('/new', (req, res, next) => {  
  const { title, year, director, duration, genre, rate, image_url } = req.body;

  const newMovie = new Movie({ title, year, director, duration, genre, rate, image_url })
  newMovie.save()
    .then(movie => {
      console.log(movie)
      res.json(movie);
    })
    .catch((error) => {
      console.log(error);
    })

});

router.delete('/delete/:id', (req, res, next) => {
  let id = req.params.id;

  Movie.findByIdAndRemove(id)
  .then(movie=>{
    res.json(movie);
  })
  .catch((err)=>{
    console.log(err);
  })
});

router.put('/update/:id' , (req, res, next) =>{
  let id = req.params.id;
  const {title, year, director, duration, genre, rate, image_url} = req.body;

  Movie.findByIdAndUpdate(id, req.body , {new: true})
  .then((movie)=>{
    res.json(movie);
  })
  .catch((err)=>{
    console.log(err);
  })
});

module.exports = router;