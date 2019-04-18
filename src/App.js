import React, { Component } from 'react';
import {Router} from '@reach/router';

import './App.css';
import Homepage from './components/homepage/Homepage';
import Drinks from './components/drinks/Drinks';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Homepage path="/"/>
        <Drinks path="/beverages" />
      </Router>
        
      </div>
    );
  }
}

export default App;
