import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Api from './MovieApi';



class EditMovie extends Component {
  constructor(props){
    super(props);
    this.state = {
        movie: {}
        
    }
    this.api = new Api()
  }


  componentDidMount(){
    this.api.oneMovie(this.props.match.params._id)
    .then(movie=>{
      console.log(movie, "did")
      this.setState({
        ...this.state,
        movie: movie
        
      })
    })
  }

  handleFormSubmit = (event) => {
    console.log(this.state.title)
    event.preventDefault();
       const title = this.state.movie.title;
      const director = this.state.movie.director;
      const rate= this.state.movie.rate;
      const image_url= this.state.movie.image_url;
      const year= this.state.movie.year;
      const duration= this.state.movie.duration;
      const id = this.props.match.params._id
  
      this.api.editMovie(title, director, rate, image_url, year, duration, id)
      .then( () => {
        // this.props.getData();
        this.setState({title: "", director: "", rate: "", image_url: "", year: "", duration: ""});
    })
    
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    const newMovie={...this.state.movie}
    newMovie[name]=value
    this.setState({
      ...this.state, 
      movie:newMovie});
}


  render(){
    console.log(this.state.movie,"editar")
    return (this.state.movie && 
      <div>
        <hr />
        <form onSubmit={this.handleFormSubmit}>
        <label for="title">Title:</label>
        <br />
        <input type="text" name="title" value={this.state.movie.title} onChange={ e => this.handleChange(e)}/>
        <br /><br />
        <label for="director">Director:</label>
        <br />
        <input type="text" name="director" value={this.state.movie.director} onChange={ e => this.handleChange(e)}/>
        <br /><br />
        <label for="rate">Rate:</label>
        <br/>
        <input type="text" name="rate" value={this.state.movie.rate} onChange={ e => this.handleChange(e)}/>
        <br /><br />
        <label for="image_url">Image:</label>
        <br/>
        <input type="text" name="image_url" value={this.state.movie.image_url} onChange={ e => this.handleChange(e)}/>
        <br /><br />
        <label for="year">Year:</label>
        <br/>
        <input type="number" name="year" value={this.state.movie.year} onChange={ e => this.handleChange(e)}/>
        <br /><br />
        <label for="duration">Duration:</label>
        <br/>
        <input type="text" name="duration" value={this.state.movie.duration} onChange={ e => this.handleChange(e)}/>
        <br /><br />    
        <input type="submit" value="ADD" />
        
      </form>
      </div>
    )
  }


}

export default EditMovie;