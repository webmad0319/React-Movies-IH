import React, { Component } from 'react';

export default class SingleMovie extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image_url} alt={this.props.title}/>
        <h2>{this.props.title} - <span>{this.props.director}</span> <span>{this.props.rate}</span> <span>{this.props.year}</span></h2>
        <p>Duration: {this.props.duration}</p>
        <ul>
          {
            this.props.genre.map((genre,index) => <li key={index}>{genre}</li>)
          }
        </ul>
      </div>
    )
  }
}
