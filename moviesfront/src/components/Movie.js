import React, { Component } from 'react'
import axios from "axios";
import EditMovie from './EditMovie';
import { Link } from 'react-router-dom';
import Api from "./MovieApi";



export default class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {},
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
 


  // renderEditForm = () => {
  //   if(!this.state.title){
  //     this.getSingleProject();
  //   } else {
    
  //     return <EditMovie theProject={this.state} getTheProject={this.state} {...this.props} />
        
  //   }
  // }

  render() {
    const movie= this.state.movie
    return (
      <div className="movie">
            <div>
            <img alt="" src={movie.image_url}/>
            </div>
            <div>
            <p>{movie.title}</p>
            <p>{movie.year}</p>
            <p>{movie.rate}</p>
            <p>{movie.duration}</p>
            <p>{movie.director}</p>
            <p>{movie.genre}</p>
            <Link to={`/edit/${movie._id}`}><button>Edit</button></Link>
            
            </div>   
      </div>
       )
      }
    }