import React from 'react';
import axios from "axios";
import './NewMovie.css';
import { Redirect } from 'react-router-dom';

class NewMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      "display": "none",
      title: "",
      year: "",
      director: "",
      duration: "",
      rate: "",
      genre: "",
      image_url: "",
      saved: false
    }
  }

  onNewMovieChange(e, key) {
    this.setState({
      ...this.state,
      [key]: e.target.value
    })
  }

  isEmptyForm(stateParam) {
    if (stateParam.title === ""
      || stateParam.year === ""
      || stateParam.director === ""
      || stateParam.duration === ""
      || stateParam.rate === ""
      || stateParam.genre === ""
      || stateParam.image_url === "") {
      return true;
    }
    else {
      return false;
    }
  }

  addNewMovie() {
    if (this.isEmptyForm(this.state)) {
      this.setState({
        "display": "block"
      })
      return;
    }
    axios
      .post("http://localhost:5000/movies/new", this.state)
      .then(newMovie => {
        this.setState({
          ...this.state,
          newMovieId: newMovie.data._id,
          saved: true
        })
      });
  }

  render() {
    if(this.state.saved)  return <Redirect to={`/movies/${this.state.newMovieId}`} />
    return (
      <React.Fragment>
        <h1>Add a new movie</h1>
        <form className="movie-form">
          <label>Title:</label>
          <input
            className="input-form"
            type="text"
            value={this.state.title}
            onChange={(e) => this.onNewMovieChange(e, "title")} />
          <label>Year:</label>
          <input
            className="input-form"
            type="number"
            value={this.state.year}
            min="0"
            onChange={(e) => this.onNewMovieChange(e, "year")} />
          <label>Director:</label>
          <input
            className="input-form"
            type="text"
            value={this.state.director}
            onChange={(e) => this.onNewMovieChange(e, "director")} />
          <label>Duration:</label>
          <input
            className="input-form"
            type="text"
            value={this.state.duration}
            onChange={(e) => this.onNewMovieChange(e, "duration")} />
          <label>Rate:</label>
          <input
            className="input-form"
            type="number"
            value={this.state.rate}
            min="0"
            onChange={(e) => this.onNewMovieChange(e, "rate")} />
          <label>Genre:</label>
          <input
            className="input-form"
            type="text"
            value={this.state.genre}
            onChange={(e) => this.onNewMovieChange(e, "genre")} />
          <label>Image:</label>
          <input
            className="input-form"
            type="text"
            value={this.state.image_url}
            onChange={(e) => this.onNewMovieChange(e, "image_url")} />
          <input
            className="btn"
            type="button"
            value="Add a movie"
            onClick={() => this.addNewMovie()} />
        </form>
        <p className="error-msg" style={{ display: this.state.display }}>You must fill all the fields</p>
      </React.Fragment>
    )
  }
}

export default NewMovie;