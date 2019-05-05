import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import ListMovies from './components/ListMovies';
import Movie from './components/Movie';
import NewMovie from './components/NewMovie';
import EditMovie from './components/EditMovie';


function App() {
  return (
    <div className="App">
      <nav>
          <Link to="/">HOME</Link>
          <br></br>
          <Link to="/new">New Movie</Link>
        </nav>
        <Switch>
          <Route exact path='/' component={ListMovies} />
          <Route exact path='/new' component={NewMovie} />
          <Route exact path='/:id' component={Movie} />
          <Route exact path='/edit/:_id' component={EditMovie}/>
        </Switch>
        <footer>
          Copyright Ironhack
        </footer>
    </div>
  );
}

export default App;
