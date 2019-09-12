import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ExtendedCard.css";
import Services from "../tools/Services";

export default class ExtendedCard extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      edit: false
    };
    this.Services = new Services();
  }

  delete(id) {
    this.Services.deleteOne(id).then(data => {
      this.setState({
        ...this.state,
        data: [data.data.title]
      });
    });
  }

  editMode() {
    this.setState({
        ...this.state,
        edit: true
    });
  }

  dataUpdate(val, key) {
    this.setState({
      ...this.state,
      data: {...this.state.data, [key]: val}
    });
  }

  update() {
    this.Services.updateOne(this.props.match.params.id, this.state.data)
      .then(
        this.setState({
        ...this.state,
        edit: false
      })
    )
  }

  componentDidMount() {
    let id = this.props.match.params.id
    this.Services.oneData(id).then(data => {
      this.setState({
        ...this.state,
        data: data
      });
    });
  }

  render() {
    let data = this.state.data;
    if (data.length === 0) {return <h3>Loading</h3>}
    else if (data.length === 1) {
      return (
        <React.Fragment>
          <h3>{data[0]} successfully deleted</h3>
          <Link to="/">Back to Home</Link>
        </React.Fragment>
      )}
    else {
      if (this.state.edit) {
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
        <button onClick={() => this.update()}>Update Movie</button>
      </div>
    );
      }
      else {
        return (
      <div className="extendedCard">
        <img src={data.image_url} alt={data.title} />
        <h3>
          {data.title}
        </h3>
        <h4>
          {data.director}
        </h4>
        <p>
          {data.year}
        </p>
        <p>
          {data.duration}
        </p>
        {data.genre.map((gen, idx) => {
          return (
            <p key={idx}>
              {gen}
            </p>
          );
        })}
        <p>
          {data.rate}
        </p>
        <button onClick={() => this.editMode()}>Edit Movie</button>
        <button onClick={() => this.delete(this.props.match.params.id)}>Delete Movie</button>
      </div>
    );
      }
    }
  }
}
