import React, { Component } from 'react';
import MoviesService from '../services/movies.service';

export default class MoviesList extends Component {
  constructor(){
    super();
    this.state = {
      movies: [],
    };
    this.moviesService = new MoviesService();
    this.getMovies();
  }
  
  getMovies(){
    this.moviesService.getAll()
      .then(movies => {
        this.setState({
          ...this.state,
          movies 
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.state.movies)}
      </div>
    )
  }
}
