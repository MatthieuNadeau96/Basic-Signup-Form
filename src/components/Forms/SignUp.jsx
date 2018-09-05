import React from 'react';

import Title from '../Title';
import Button from '../Button';
import {Link } from 'react-router-dom';

const SignUp = (props) => (
  <div className="signUpContainer">
    <Title title="Sign Up"/>
    <form>
      <input className="userName" placeholder="Username" type="text" required/>
      <input className="email" placeholder="Email" name="email" required/>
      <input className="password" placeholder="Password" type="password" required/>
    </form>
    <Button class="btn signUpBTn" btnName="Sign Up"/>
    <div className="linkToSignUp">Already have an account? <Link to='/'>Sign In</Link></div>
  </div>
);

export default SignUp;
