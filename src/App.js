import React, { Component } from 'react';
import './App.css';

import SignIn from './components/Forms/SignIn';
import SignUp from './components/Forms/SignUp';

import { Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="title">Dribble</div>
          <Route exact path='/' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
        </div>
      </div>
    );
  }
}

export default App;
