/**
 * MovieController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const movies = require('../seeds/movies');

module.exports = {
  seedDB: function(req, res){
    Movies.createEach(movies);
  },
  getAll: (req, res) => res.json({hello: 305}),
  getById: (req, res) => res.json({hello: 2}),
  create: (req, res) => res.json({hello: 3}),
  'delete': (req, res) => res.json({hello: 4}),
  update: (req, res) => res.json({hello: 5}),

};

