import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'
import ExtendedCard from './components/ExtendedCard'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/one/:id" component={ExtendedCard}/>
        <Route exact path="/new"/>
      </Switch>
    </div>
  );
}

export default App;