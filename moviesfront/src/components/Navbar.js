import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/components/all'>All</Link></li>
        <li><Link to='/components/single'>Single</Link></li>
        <li><Link to='/components/newMovie'>New Movie</Link></li>
      </ul>
    </nav>
  )
}

export default navbar;