import React, { Component } from 'react';
import './Movie.css';
import {Link} from 'react-router-dom';
import MoviesService from '../services/movies.service';

export default class Movie extends Component {

  render() {
    return (
      <div className="Movie">
        <Link to={`/movies/${this.props.id}`}><img src={this.props.image_url} alt={this.props.title}/></Link>
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}
