import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class ListMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListMovies: []
    };
  }

  componentDidMount() {
    axios
    .get("http://localhost:5000/all")
    .then(allMovies => {
      const allMoviesPay = allMovies.data;

      this.setState({
        ...this.state,
        ListMovies: allMoviesPay
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.ListMovies.map((movie,idx) => {
          return (
            <div key={idx}>
          
            <img alt="" src={movie.image_url}></img>
            <Link className="" to={`/${movie._id}`}>{movie.title}</Link>
            </div>
            
           
          )
        })
        }
      </div>
    );
  }
}
