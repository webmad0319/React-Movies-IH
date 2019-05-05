import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <ul>
          <li><Link to="/">All movies</Link></li>
          <li><Link to="/new">Add movie</Link></li>
        </ul>
      </div>
    )
  }
}
