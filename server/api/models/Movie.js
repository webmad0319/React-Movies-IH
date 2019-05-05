/**
 * Movie.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: { type: 'string', columnName: 'title' },
    year: { type: 'number', columnName: 'year' },
    director: { type: 'string', columnName: 'director' },
    duration: { type: 'string', columnName: 'duration' },
    genre: { type: 'json', columnType: 'array', columnName: 'genre' },
    rate: { type: 'string', columnName: 'rate' },
    image_url: { type: 'string', columnName: 'image_url' },
  },

};

