import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Api from "./MovieApi";
import axios from "axios";

export default class ListMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
     movies: []
    }
    this.api = new Api()
  }

  componentDidMount(){
    this.api.allMovies()
    .then(movies=>{
      console.log(movies)
      this.setState({
        ...this.state,
        movies: movies
        
      })
    })
  }


  render() {
    // if(this.state.data){
    console.log(this.state.movies)
    return (this.state.movies && 
      <div>
        {this.state.movies.map((movie,idx) => {
          return (
            <div key={idx}>
          
            <img alt="" src={movie.image_url}></img>
            <Link className="" to={`/${movie._id}`}>{movie.title}</Link>
            </div>
          )
        })
        }
      </div>
    )
    
  }



  
}
