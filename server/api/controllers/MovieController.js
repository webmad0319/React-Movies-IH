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
  create: (req, res) => res.json({hello: 3}),
  'delete': (req, res) => res.json({hello: 4}),
  update: (req, res) => res.json({hello: 5}),

};

