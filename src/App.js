import React, { Component } from 'react';
import './App.css';

import SignIn from './components/Forms/SignIn';
import SignUp from './components/Forms/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="title">Dribble</div>
          <SignUp/>
        </div>
      </div>
    );
  }
}

export default App;
