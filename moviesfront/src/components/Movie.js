import React, { Component } from 'react'
import axios from "axios";
import EditMovie from './EditMovie';
import { Link } from 'react-router-dom';


export default class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {},
    }
  }

  componentDidMount(){
    axios
        .get(`http://localhost:5000/one/${this.props.match.params.id}`)
        .then(movie => {
          console.log(this.props.match.params.id)
            const oneMovie = movie.data 
            this.setState({
                ...this.state,
                movie: oneMovie
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
    var movie= this.state.movie
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