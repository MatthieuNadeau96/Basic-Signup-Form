import React, { Component } from 'react';
import './App.css';

import SignIn from './components/Forms/SignIn';
import SignUp from './components/Forms/SignUp';

import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Route exact path='/' component={SignIn} />
          <Route exact path='/sign-up' component={SignUp} />
        </div>
      </div>
    );
  }
}

export default App;
