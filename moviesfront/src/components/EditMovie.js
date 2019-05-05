import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';



class EditMovie extends Component {
  constructor(props){
    super(props);
    this.state = {
        movie: {}
        
    }
  }


  componentDidMount(){
    const movie= this.state.movie;

    axios.put(`http://localhost:5000/edit/${this.props.match.params._id}`,{movie})
    .then(movie => {
      const oneMovie = movie.data
      console.log(oneMovie)

      this.setState({
          ...this.state,
          movie: oneMovie
    })
  })
}

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
}


  render(){
    console.log(this.state.movie, this.props.match.params,"editar")
    return (
      <div>
        <hr />
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
        <input type="text" name="rate" value={this.state.rate} onChange={ e => this.handleChange(e)}/>
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
    )
  }


}

export default EditMovie;