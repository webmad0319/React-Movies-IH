import React, { Component } from 'react';
import MoviesService from '../services/movies.service';
import {Redirect} from 'react-router-dom';
import './NewMovie.css';

export default class NewMovie extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      year: 0,
      director: '',
      duration:'',
      genre: [],
      rate: '',
      image_url:'',
      redirect: false
    }
    this.moviesService = new MoviesService();
    if(this.props.match.params.id.length !== 0){
      this.loadMovie(this.props.match.params.id);
    }
  }

  loadMovie(id){
    this.moviesService.getById(id)
      .then(movie => this.setState({
        ...this.state,
        title: movie.title,
        year: movie.year,
        director: movie.director,
        duration: movie.duration,
        rate: movie.rate,
        image_url: movie.image_url,
      }))
      .catch(err => console.error(err));
  }

  handleChange(e, key){
    const state = {...this.state};
    state[key] = e.target.value;
    this.setState({
      ...state
    });
  }

  addMovie(e){
    e.preventDefault();
    const state = {...this.state};
    delete state.redirect;
    this.moviesService.add(state)
      .then(()=> this.setState({
        ...this.state,
        redirect: true,
      }))
      .catch(err => console.log(err));
  }
  updateMovie(e){
    e.preventDefault();
    const state = {...this.state};
    delete state.redirect;
    this.moviesService.update(this.props.match.params.id, state)
      .then(()=> this.setState({
        ...this.state,
        redirect: true,
      }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="NewMovie">
        {
          this.state.redirect ? <Redirect to="/"/> : null
        }
        <h1>Add new movie</h1>
        <form className="form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" value={this.state.title} onChange={(e)=>this.handleChange(e, 'title')} placeholder="Your movie's title" required/>
          </div>
          <div className="form-group">
            <label htmlFor="year">year</label>
            <input type="number" value={this.state.year} onChange={(e)=>this.handleChange(e, 'year')} placeholder="0" required/>
          </div>
          <div className="form-group">
            <label htmlFor="director">director</label>
            <input type="text" value={this.state.director} onChange={(e)=>this.handleChange(e, 'director')} placeholder="Your movie's director" required/>
          </div>
          <div className="form-group">
            <label htmlFor="duration">duration</label>
            <input type="text" value={this.state.duration} onChange={(e)=>this.handleChange(e, 'duration')} placeholder="Your movie's duration" required/>
          </div>
          <div className="form-group">
            <label htmlFor="genre">genre</label>
            <input type="text" value={this.state.genre} onChange={(e)=>this.handleChange(e, 'genre')} placeholder="Your movie's genre" disabled/>
          </div>
          <div className="form-group">
            <label htmlFor="rate">rate</label>
            <input type="text" value={this.state.rate} onChange={(e)=>this.handleChange(e, 'rate')} placeholder="Your movie's rate" required/>
          </div>
          <div className="form-group">
            <label htmlFor="image_url">image_url</label>
            <input type="text" value={this.state.image_url} onChange={(e)=>this.handleChange(e, 'image_url')} placeholder="Your movie's image_url"/>
          </div>
          <button onClick={this.props.match.params.id.length === 0 ? (e)=>this.addMovie(e) : (e) => this.updateMovie(e)}>{
            this.props.match.params.id.length === 0 ? 'Add movie' : 'Update movie'
          }
          </button>
        </form>
      </div>
    )
  }
}
