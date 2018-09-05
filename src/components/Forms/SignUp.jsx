import React from 'react';

import Button from '../Button';

const SignUp = (props) => (
  <div className="signUpContainer">
    <form>
      <input className="userName" placeholder="Username" type="text" required/>
      <input className="email" placeholder="Email" name="email" required/>
      <input className="password" placeholder="Password" type="password" required/>
      <Button class="btn signUpBTn" btnName="Sign Up"/>
      <div className="linkToSignUp">Already have an account? <a href='/'>Sign In</a></div>
    </form>
  </div>
);

export default SignUp;
