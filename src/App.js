import React, { Component } from 'react';
import {Router} from '@reach/router';

import './App.css';
import Homepage from './components/homepage/Homepage';
import Guests from './components/guests/Guests';
import Menu from './components/menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Homepage path="/"/>
        <Guests path="/guest"/>
        <Menu path="menu"/>
      </Router>
        
      </div>
    );
  }
}

export default App;
