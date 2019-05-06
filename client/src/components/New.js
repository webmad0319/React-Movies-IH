import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import "./New.css";
import Services from "../tools/Services";

export default class New extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      created: false,
      id: ""
    };
    this.Services = new Services();
  }

  dataUpdate(val, key) {
    this.setState({
      ...this.state,
      data: {...this.state.data, [key]: val}
    });
  }

  create() {
    console.log(this.state.data)
    this.Services.newOne(this.state.data)
      .then(data => {
        this.setState({
          ...this.state,
          created: true,
          id: data.data._id
        })
      }
      );
  }

  render() {
    let data = this.state.data;
        if (this.state.created) { return <Redirect to = {{ pathname: `/one/${this.state.id}` }} />;}
        else {
          return (
      <div className="extendedCardEdit">
        <input
          type="text"
          placeholder="image url"
          value={data.image_url}
          onChange={e => this.dataUpdate(e.target.value, "image_url")}
        />
        <input
          type="text"
          placeholder="title"
          value={data.title}
          onChange={e => this.dataUpdate(e.target.value, "title")}
        />
        <input
          type="text"
          placeholder="director"
          value={data.director}
          onChange={e => this.dataUpdate(e.target.value, "director")}
        />
        <input
          type="text"
          placeholder="year"
          value={data.year}
          onChange={e => this.dataUpdate(e.target.value, "year")}
        />
        <input
          type="text"
          placeholder="duration"
          value={data.duration}
          onChange={e => this.dataUpdate(e.target.value, "duration")}
        />
        <input
          type="text"
          placeholder="rate"
          value={data.rate}
          onChange={e => this.dataUpdate(e.target.value, "rate")}
        />
        <button onClick={() => this.create()}>Create Movie</button>
      </div>
          )}}
    
}
