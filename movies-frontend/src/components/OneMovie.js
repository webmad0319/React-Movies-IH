import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import './OneMovie.css'
import { Redirect } from 'react-router-dom';

class OneMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      deleted: false
    }
  }

  updateMovie() {
    
  }

  deleteMovie() {
    const movieId = this.props.match.params.movieId;
    axios
      .delete(`http://localhost:5000/movies/${movieId}`)
      .then((deletedMovie) => {
        this.setState({
          ...this.state,
          deleted: true
        })

      })
  }

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    if (movieId) {
      axios
        .get(`http://localhost:5000/movies/${movieId}`)
        .then(singleMoviePayload => {
          this.setState({
            ...this.state,
            movie: singleMoviePayload.data
          })
        })
    }
  }

  render() {
    if (this.state.deleted) return <Redirect to={`/`} />
    return (
      <div className="movie-list">
        <img src={this.state.movie.image_url} alt="" className="img-newMovie" />
        <div className="movie-data">
          <Link to={`/movies/${this.state.movie._id}`} className="movie-link">{this.state.movie.title}</Link>
          <p>Year: {this.state.movie.year}</p>
          <p>Director: {this.state.movie.director}</p>
          <p>Duration: {this.state.movie.duration}</p>
          <p>Rate: {this.state.movie.rate}</p>
          <p>Genre: {this.state.movie.genre}</p>
        </div>
        <div className="movie-btn">
          <button onClick={() => this.updateMovie()}>Update the movie</button>
          <button onClick={() => this.deleteMovie()}>Delete the movie</button>
        </div>
      </div>
    )
  }
}

export default OneMovie;

// {
//   this.props.match.params.mode === 'mosaic' ? this.generateMosaic() : null
// }

// generateCompact() {
//   return (
//     this.state.allBeers.map((beer, idx) => {
//       return (
//         <BeerDisplayer
//           key={idx}
//           mode="compact"
//           name={beer.name}
//           image_url={beer.image_url}
//         />
//       )
//     })
//   )
// }