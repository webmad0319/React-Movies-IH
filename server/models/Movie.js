const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  year: Number,
  duration: String,
  director: String,
  genre: Array,
  rate: Number,
  image_url: String
}, {
  timestamps: true
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;