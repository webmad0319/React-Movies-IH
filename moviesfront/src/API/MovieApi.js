import React, { Component } from 'react'
import axios from "axios";

class MovieApi{
  constructor() {
    this.service = axios.create({
      baseURL:`http://localhost:5000`,
      withCredentials: true
    })
  }

  allMovies() {
    return this.service
    .get('/all')
    .then(response => {console.log(response, "hola")
    return response.data})
    .catch(err => console.log(err))
    }
    
}

export default MovieApi
