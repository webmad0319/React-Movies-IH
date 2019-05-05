import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SingleMovie from './components/SingleMovie';
import MoviesList from './components/MoviesList';
import NewMovie from './components/NewMovie';
import {Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route exact path="/" component={MoviesList}/>
        <Route exact path="/new/:id?" component={NewMovie}/>
        <Route path="/movies/:id" component={SingleMovie}/>
        <Route render={() => <Redirect to="/"/>}/>
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
