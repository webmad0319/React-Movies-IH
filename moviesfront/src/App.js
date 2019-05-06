import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListMovies from './components/ListMovies';
import Movie from './components/Movie';
import NewMovie from './components/NewMovie';
import EditMovie from './components/EditMovie';
import Navigator from './components/Navigator';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navigator></Navigator>
      </div>
        
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
