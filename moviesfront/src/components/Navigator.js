import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navigator.css';

export default class Navigator extends Component {
  render() {
    return (
      <div clasName="Navi">

            <div>
              <Link to="/">HOME</Link>  
            </div>  
            <div>
              <Link to="/new">New Movie</Link>
            </div>
          
      </div>
    )
  }
}
