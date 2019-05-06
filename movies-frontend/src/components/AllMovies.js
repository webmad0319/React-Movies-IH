import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import './AllMovies.css';

class AllMovies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/movies/all")
      .then(allMoviesPayload => {
        const allMovies = allMoviesPayload.data
        this.setState({
          ...this.state,
          movies: allMovies
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.movies.map((movie, idx) => {
            return (
              <div key={idx} className="Allmovies-list">
                <img src={movie.image_url} alt="" className="img" />
                <div className="Allmovies-data">
                  <Link to={`/movies/${movie._id}`} className="Allmovies-link">{movie.title}</Link>
                  <p>Year: {movie.year}</p>
                  <p>Director: {movie.director}</p>
                  <p>Duration: {movie.duration}</p>
                  <p>Rate: {movie.rate}</p>
                  <p>Genre: {movie.genre}</p>
                </div>
              </div>
            )
          })
        }
      </React.Fragment>
    )
  }
}

export default AllMovies;
