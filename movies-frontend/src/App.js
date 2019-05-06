import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import AllMovies from './components/AllMovies';
import OneMovie from './components/OneMovie';
import NewMovie from './components/NewMovie';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <Link to='/' className="home-link"><i className="fas fa-home" /></Link>
          <Link to='/new-movie' className="new-link">New movie</Link>
        </nav>
        <Switch>
          <Route exact path='/' component={AllMovies} />
          <Route exact path='/movies/:movieId' component={OneMovie} />
          <Route exact path='/new-movie' component={NewMovie} />
        </Switch>
        <footer>
          Copyright Ironhack
        </footer>
      </React.Fragment>
    )
  }
}

export default App;
