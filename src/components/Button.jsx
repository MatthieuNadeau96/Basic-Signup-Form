import React from 'react';

const Button = (props) => (
  <div className="buttonContainer">
    <button className={props.class} href={props.linkTo}>{props.btnName}</button>
  </div>
);

export default Button;
