import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'
import ExtendedCard from './components/ExtendedCard'
import New from './components/New'



export default class App extends React.Component {

  render() {
    return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/one/:id" component={ExtendedCard}/>
        <Route exact path="/new" component={New}/>
      </Switch>
    </div>
  );
  }
}
