import React from "react";
import "./Signup.css";
import GoogleLogo from "../image/search 1.png";
import FacebookLogo from "../image/facebook 1.png";
import Button from "../Button/Button";
import Form from "../Form/Form.js";


const btns = [
  {
    id: 1,
    image: GoogleLogo,
    text: "Sign Up With Google",
  },
  {
    id: 2,
    image: FacebookLogo,
    text: "Sign Up With FaceBook",
  },
];

const Signup = () => {


  return (
    <>
      <div className="signup">
        <div className="inner-container">
          <h2>Create Account</h2>
          <div className="btns">
            {btns.map((btn) => (
              <Button image={btn.image} text={btn.text} key={btn.id} />
            ))}
          </div>
          <div className="or">
            <p>- OR -</p>
          </div>
          <Form />
          
        </div>
      </div>
    </>
  );
};

export default Signup;