import React from 'react';
import axios from 'axios';
import './all.css';

class single extends React.Component {
  state = {
    movie: []
  }

  componentDidMount() {
    console.log("single Movie montado")
    axios.get("http://localhost:5000/single/:id").then(singleMoviePayload => {
      const singleMovie = singleMoviePayload.data;
      console.log(singleMovie)

      this.setState({
        ...this.state,
        movie: singleMovie
      });
    });
  }

  render() {
    return (
        
        <ul>
          <li className="listado">
            <h5>{this.state.movie.title}</h5>
            <h5>{this.state.movie.year}</h5>
            <p>{this.state.movie.director}</p>
          </li>
        </ul>
      )
    }
    
}

export default single;