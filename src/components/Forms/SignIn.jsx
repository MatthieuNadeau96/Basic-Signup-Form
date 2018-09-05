import React from 'react';

import Button from '../Button';
import { Link } from 'react-router'

const Form = (props) => (
  <div className="signInContainer">
    <form>
      <input className="email" placeholder="Email" name="email" required/>
      <input className="password" placeholder="Password" type="password" required/>
    </form>
    <Button class="btn signInBtn" btnName="Sign In" linkTo="/"/>
    <div className="linkToSignUp">Need an account? <a href='/sign-up'>Sign Up</a></div>
  </div>
);

export default Form;
