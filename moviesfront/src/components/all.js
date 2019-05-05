import React from 'react';
import axios from 'axios';
import './all.css';

class all extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    axios.get("http://localhost:5000/all").then(allMoviesPayload => {
      const allMovies = allMoviesPayload.data;

      this.setState({
        ...this.state,
        movies: allMovies
      });
    });
  }


  render() {
    return (
        this.state.movies.map((movie, idx) => {
      return (
        <ul key={idx}>
          <li className="listado">
            <h5>{movie.title}</h5>
            <h5>{movie.year}</h5>
            <p>{movie.director}</p>
          </li>
        </ul>
      )
    })
    )}
}

export default all;
