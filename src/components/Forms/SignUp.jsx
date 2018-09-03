import React from 'react';

import Button from '../Button';

const SignUp = (props) => (
  <div className="signUpContainer">
    <form>
      <input className="userName" placeholder="Username" type="text" required/>
      <input className="email" placeholder="Email" name="email" required/>
      <input className="password" placeholder="Password" type="password" required/>
      <Button class="btn signInBTn" btnName="Sign In"/>
    </form>
    <div className="linkToSignUp">Need an account? <a href='/'>Sign Up</a></div>
  </div>
);

export default SignUp;
