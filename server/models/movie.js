const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  title: {type: String, unique: true},
  year: {type: Number},
  director: {type: String},
  duration:{type: String},
  genre : [{type: String}],
  rate : {type: Number},
  image_url: {type: String}
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie