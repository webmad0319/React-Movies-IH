import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Api from "../API/MovieApi";

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
        movies: movies
      })
    })
  }


  render() {
    if(this.state.movies){
    console.log(this.state.movies)
    return (
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
  }else{
    return (
      <div>
        <h1>esperando</h1>
      </div>
    )
  }
  }



  
}
