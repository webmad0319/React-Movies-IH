import React from 'react';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
// import allMovies from './components/allMovies';
import oneMovie from './components/oneMovie';
import newMovie from './components/newMovie';

class App extends React.Component {
  render () {
    return (
      <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/new'>Add movie</Link>
      </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/one/:id" component={oneMovie}/>
          <Route exact path="/new" component={newMovie}/>
          <Route exact path="/delete/:id"/>
          <Route exact path="/update/:id"/>
      </Switch>
      <footer>
        Copyright by Me and my person
      </footer>
      </div>
    );
  }
}

export default App;
