import React, { Component } from 'react';
import MoviesService from '../services/movies.service';
import './SingleMovie.css';

export default class SingleMovie extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie: null,
    }
    this.moviesService = new MoviesService();
    
  }

  componentDidMount(){
    this.moviesService.getById(this.props.match.params.id)
      .then(movie => this.setState({
        ...this.state,
        movie
      }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="SingleMovie">
        {
          this.state.movie ? 
          <React.Fragment>
            <img src={this.state.movie.image_url} alt={this.state.movie.title}/>
            <div>
              <h2>{this.state.movie.title} - <span className="details">{this.state.movie.director}</span> <span className="details">{this.state.movie.rate}</span> <span className="details">{this.state.movie.year}</span></h2>
              <p>Duration: {this.state.movie.duration}</p>
              <ul>
                {
                  this.state.movie.genre.map((genre,index) => <li key={index}>{genre}</li>)
                }
              </ul>
            </div>
          </React.Fragment>
          : null
        }
      </div>
    )
  }
}
