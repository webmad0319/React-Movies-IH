const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get('/all', (req, res, next) => {
  Movie.find({}).then(data => {
    res.json(data);
  })
  .catch((err)=>{
    console.log(err)
  })
});

router.get('/one/:id', (req, res, next) => {
  Movie.findById(req.params.id).then(data => {
    res.json({data});
  })
  .catch((err)=>{
    console.log(err)
  })
});

router.post('/new', (req, res, next) => {
  Movie.create({
    title: req.body.title,
    year: req.body.year,
    duration: req.body.duration,
    rate: req.body.rate,
    image_url: req.body.image_url
  })
  .catch((err)=>{
    console.log(err)
  })
});

router.put('/update/:id', (req, res, next) => {
  Movie.findByIdAndUpdate(
    req.params.id,
    {
    title: req.body.title,
    year: req.body.year,
    duration: req.body.duration,
    rate: req.body.rate,
    image_url: req.body.image_url
  }
  ).then(data => {
    res.json({data});
  })
  .catch((err)=>{
    console.log(err)
  })
});

router.delete('/delete/:id', (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id).then(data => {
    res.json({data});
  })
  .catch((err)=>{
    console.log(err)
  })
});

module.exports = router;
