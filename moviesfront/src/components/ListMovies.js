import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import MovieApi from "../API/MovieApi";

export default class ListMovies extends Component {
  constructor() {
    super();
    this.state = {
     data: []
    }
    this.auxServices = new MovieApi();
    this.getInfo();
  }

  getInfo = ()=>{
    this.auxServices.allMovies()
    .then((data)=>{
      console.log(this.data)
      this.setState({
        ...this.state,
        data:data.data})
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div>
        {this.state.data.map((movie,idx) => {
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
