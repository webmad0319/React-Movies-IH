import React from 'react';
import Services from "../tools/tools";

class newMovie extends React.Component {
  constructor () {
    super()
    this.state = {
      data: []
    }
    this.auxServices = new Services()
  }  

  componentDidMount() {
    return this.auxServices.addNewMovie()
    .then(data=>{
       this.setState({
          data
        })
    })
}

addNewMovie = (e) => {
  e.preventDefault()
  const body = {
      name: e.target.name.value,
      year: e.target.year.value,
      director: e.target.director.value,
      duration: e.target.duration.value,
      genre: e.target.genre.value,
      rate: e.target.rate.value,
      image_url: e.target.image_url.value
  }
  this.auxServices.addNewMovie(body)
  .then(info => console.log(info))
  .catch(err => console.log(err))
}

  render() {
    return (
      <form onSubmit={this.addNewMovie}>
                <h2>Add a new movie</h2>
                <label>Movie name: </label>
                <input 
                    type="text" 
                    name="title" />
                
                <label>Year: </label>
                <input 
                    type="number" 
                    name="year" />

                <label>Director: </label>
                <input 
                    type="text" 
                    name="director" />

                <label>Duration: </label>
                <input 
                    type="text" 
                    name="duration" />

                <label>Genre: </label>
                <input 
                    type="text" 
                    name="genre" />

                <label>Rate: </label>
                <input 
                    type="number" 
                    name="rate" />

                <label>Image: </label>
                <input 
                    type="text" 
                    name="image_url" />

                <button type="submit">Create new movie!</button>
      </form>
    )
  }
}

export default newMovie;
