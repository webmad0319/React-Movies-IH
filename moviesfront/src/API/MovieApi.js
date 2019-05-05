import React, { Component } from 'react'
import axios from "axios";

class MovieApi extends Component {
  constructor() {
    super()
    this.service = axios.create({
      baseURL:`http://localhost:5000/`,
      withCredentials: true
    })
    
  }

  allMovies = () => {
    
    return this.service.get('/all')
    .then((response) => {
      return response.data})
  }
}

export default MovieApi
