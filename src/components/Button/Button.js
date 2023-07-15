import React from "react";
import "./Button.css";

const Button = ({ image, text, id }) => {
  return (
    <>
      <button className="Button" id={id}>
        <img src={image} /> {text}
      </button>
    </>
  );
};

export default Button;