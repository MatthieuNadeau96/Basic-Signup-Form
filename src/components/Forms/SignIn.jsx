import React from 'react';

import Title from '../Title';
import Button from '../Button';
import {Link } from 'react-router-dom';

const Form = (props) => (
  <div className="signInContainer">
    <Title title="Sign In"/>
    <form>
      <input className="email" placeholder="Email" name="email" required/>
      <input className="password" placeholder="Password" type="password" required/>
      <Button class="btn signInBtn" btnName="Sign In" linkTo="/"/>
      <div className="linkToSignUp">Need an account? <Link to="/sign-up">Sign Up</Link></div>
    </form>
  </div>
);

export default Form;
