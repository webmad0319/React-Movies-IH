/**
 * MovieController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const movies = require('../seeds/movies');

module.exports = {
  seedDB: function(req, res){
    sails.models.movie.createEach(movies)
      .then(res.json({seededDB: true}))
      .catch(err => console.error(err));
  },
  getAll: function(req, res){
    sails.models.movie.find()
      .then(movies => res.json(movies))
      .catch(err => console.error(err));
  },
  getById: function(req, res){
    sails.models.movie.findOne({_id: req.params.id})
      .then(movie => res.json(movie))
      .catch(err => console.error(err));
  },
  create: function(req, res){
    sails.models.movie.create({...req.body})
      .then(movie => res.json({
        movie: movie,
        message: 'Movie created successfully',
      }))
      .catch(err => console.error(err));
  },
  'delete': function(req, res){
    sails.models.movie.destroyOne({
      _id: req.params.id
    })
    .then(movie => res.json({
      movie,
      message: 'Movie deleted successfully'
    }))
  },
  update: function(req, res){
    sails.models.movie.updateOne({
      _id: req.params.id
    })
    .set({
      ...req.body
    })
    .then(movie => {
      res.json({
        movie: movie,
        message: 'Movie updated successfully'
      })
    })
    .catch(err => console.error(err));
  },

};

