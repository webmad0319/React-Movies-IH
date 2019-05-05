import React, { Component } from 'react'
import axios from "axios";
import EditMovie from './EditMovie';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import Api from "./MovieApi";



export default class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: null,
      redirect: false,
    }
    this.api = new Api()

  }

  componentDidMount(){
    this.api.oneMovie(this.props.match.params.id)
    .then(movie=>{
      console.log(movie)
      this.setState({
        ...this.state,
        movie: movie
        
      })
    })
  }

  clearMovie = () => {
    const id = this.props.match.params.id;
    this.api.deleteMovie(id)
    .then(movie=>{
      console.log(movie)
      this.setState({
        ...this.state,
        redirect: true,
        movie: movie
        
      })
    })
  }
 


  // renderEditForm = () => {
  //   if(!this.state.title){
  //     this.getSingleProject();
  //   } else {
    
  //     return <EditMovie theProject={this.state} getTheProject={this.state} {...this.props} />
        
  //   }
  // }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
    const movie= this.state.movie
    return (this.state.movie && 
      <div className="movie">
            <div>
            <img alt="" src={movie.image_url}/>
            </div>
            <div>
            <p>{movie.title}</p>
            <p>{movie.director}</p>
            <p>{movie.year}</p>
            <p>{movie.rate}</p>
            <p>{movie.duration}</p>
            <p>{movie.genre}</p>
            <Link to={`/edit/${movie._id}`}><button>Edit</button></Link>
            <button onClick={() => this.clearMovie()}>Delete Movie</button>
            
            </div>   
      </div>
       )
      }
    }