import React from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import Api from './MovieApi';



class NewMovie extends React.Component {
  constructor(){
    super()
  this.state = {
    title: "",
    director: "",
    rate: "",
    image_url: "",
    year: "",
    duration: "",
    redirect: false,
  }
  this.api = new Api()
}
  

handleFormSubmit = (event) => {
  event.preventDefault();
  const title = this.state.title;
    const director = this.state.director;
    const rate= this.state.rate;
    const image_url= this.state.image_url;
    const year= this.state.year;
    const duration= this.state.duration;

    this.api.newMovie(title, director, rate, image_url, year, duration)
    .then( () => {
      // this.props.getData();
      this.setState({redirect: true, title: "", director: "", rate: "", image_url: "", year: "", duration: ""});
  })
  
}

handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
}

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
    console.log(this.state.title)
    return (
      <div>
      <form onSubmit={this.handleFormSubmit}>
        <label for="title">Title:</label>
        <br />
        <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
        <br /><br />
        <label for="director">Director:</label>
        <br />
        <input type="text" name="director" value={this.state.director} onChange={ e => this.handleChange(e)}/>
        <br /><br />
        <label for="rate">Rate:</label>
        <br/>
        <input type="number" name="rate" value={this.state.rate} onChange={ e => this.handleChange(e)}/>
        <br /><br />
        <label for="image_url">Image:</label>
        <br/>
        <input type="text" name="image_url" value={this.state.image_url} onChange={ e => this.handleChange(e)}/>
        <br /><br />
        <label for="year">Year:</label>
        <br/>
        <input type="number" name="year" value={this.state.year} onChange={ e => this.handleChange(e)}/>
        <br /><br />
        <label for="duration">Duration:</label>
        <br/>
        <input type="text" name="duration" value={this.state.duration} onChange={ e => this.handleChange(e)}/>
        <br /><br />    
        <input type="submit" value="ADD" />
        
      </form>
      </div>
    );
  }
}

export default NewMovie;