import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <Link to={`/one/${this.props._id}`}>
          <img src={this.props.image_url} alt={this.props.title} />
          <h3>
            {this.props.title}
          </h3>
          <p>
            {this.props.year}
          </p>
        </Link>
      </div>
    );
  }
}
