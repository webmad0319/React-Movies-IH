import React, { Component } from 'react';
import MoviesService from '../services/movies.service';
import Movie from './Movie';
import './MoviesList.css';

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
      <div className="MoviesList">
        {
          this.state.movies.map((movie, index) => <Movie key={index} {...movie}/>)
        }
      </div>
    )
  }
}
