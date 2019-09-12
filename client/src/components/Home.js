import React, { Component } from "react";
import "./Home.css";
import Services from "../tools/Services";
import Card from "./Card"
import SearchBar from './SearchBar'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dataCopy: []
    };
  }

  Services = new Services();

  componentDidMount() {
    this.Services.all().then(data => {
      this.setState({
        ...this.state,
        data: data,
        dataCopy: data
      });
    });
  }

  filterMovie(movieKey) {
    let filteredMovie = [...this.state.data];
    if (movieKey.length === 0) {
      this.setState({
        ...this.state,
        data: this.state.dataCopy
      })
    }
    else {
      this.setState({
      ...this.state,
      data: filteredMovie.filter(movie =>
        movie.title.toLowerCase().includes(movieKey.toLowerCase())
      )
    });
    }
  }

  sortMovie(key) {
    let sortedMovie = [...this.state.dataCopy]
    let toMinutes = (str) => {
      let x = str.split(" ").map(el => parseInt(el))
      return ((x[0] * 60) + x[1])
    }
    if(key === "duration") {
      this.setState({
      ...this.state,
      data: sortedMovie.sort((a, b) => {return toMinutes(b[key]) - toMinutes(a[key])})
      })
    }
    else {
      this.setState({
      ...this.state,
      data: sortedMovie.sort((a, b) => {return b[key] - a[key]})
      })
    }
  }

  render() {
      return (
        <div>
          <SearchBar search={movie => this.filterMovie(movie)} check={(key) => this.sortMovie(key)}/>
          {this.state.data.map((dat, idx) => {
            return <Card key={idx} {...dat} />;
          })}
        </div>
      );
  }
}
