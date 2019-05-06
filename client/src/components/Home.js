import React, { Component } from "react";
import "./Home.css";
import Services from "../tools/Services";
import Card from "./Card"

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.Services = new Services();
  }

  componentDidMount() {
    this.Services.all().then(data => {
      this.setState({
        ...this.state,
        data: data
      });
    });
  }

  render() {
    console.log(this.state.data)
      return (
        <div>
          {this.state.data.map(dat => {
            return <Card {...dat} />;
          })}
        </div>
      );
  }
}
