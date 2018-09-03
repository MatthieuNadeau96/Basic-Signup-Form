import React from 'react';

import Button from '../Button';

const Form = (props) => (
  <div className="signInContainer">
    <form>
      <input className="email" placeholder="Email" name="email"/>
      <input className="password" placeholder="password" name="password"/>
    </form>
    <Button className="signInBTn" btnName="Sign In"/>
    <div className="linkToSignUp">Need an account? <a href='/'>Sign Up</a></div>
  </div>
);

export default Form;
