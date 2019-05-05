import React from 'react';
import logo from './movie.png';
import './App.css';
import Home from './components/home';
import All from './components/all';
import Single from './components/single';
import New from './components/newMovie';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       <nav className="App-nav">
       <Navbar />
       <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/components/all' component={All}/>
          <Route exact path='/components/single' component={Single}/>
          <Route exact path='/components/newMovie' component={New}/>
        </Switch>
       </nav>
      </header>
      <footer>
        <small><i className="fa fa-copyright" aria-hidden="true">copyright by algorinet</i></small>
      </footer>
    </div>
  );
}

export default App;
