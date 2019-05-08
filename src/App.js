import React, { Component } from 'react';
import {Router} from '@reach/router';

import './App.css';
import Homepage from './components/homepage/Homepage';
import Menu from './components/menu/Menu';
import Confirmation from './components/confirmation/Confirmation';
import Edit from './components/edit/Edit';
import Submitted from './components/confirmation/submitted/Submitted';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Homepage path="/"/>
        <Menu path="/menu"/>
        <Confirmation path ='/confirmation'/>
        <Edit path='/confirmation/edit/:id'/>
        <Submitted path='/submitted'/>
      </Router>
        
      </div>
    );
  }
}

export default App;
