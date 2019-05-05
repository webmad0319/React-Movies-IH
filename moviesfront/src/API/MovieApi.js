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
    .then(response => response.data)
  }
}

export default MovieApi
