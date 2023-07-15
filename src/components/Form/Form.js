import React, { useState } from "react";
import "./Form.css";
import ErrorValidate from "../ErrorValidate/ErrorValidate";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassowrd, setUserPassowrd] = useState("");
  const [userConfPassword, setUserConfPassword] = useState("");

  const [check, setCheck] = useState("");
  const [passVis, setPassVis] = useState(false);
  const [conPassVis, setConPassVis] = useState(false);

  function validate() {
    if (userName.trim() === "") {
      setCheck("name");
      return;
    } else if (!userEmail.includes("@") || !userEmail.includes(".")) {
      setCheck("email");
      return;
    } else if (
      userPassowrd !== userConfPassword ||
      userPassowrd === "" ||
      userConfPassword === ""
    ) {
      setCheck("password");
      return;
    } else {
      setCheck("success");
      setUserName("");
      setUserEmail("");
      setUserPassowrd("");
      setUserConfPassword("");
    }
  }

  function toggelPasswordVisibity() {
    if (passVis) {
      setPassVis(false);
    } else {
      setPassVis(true);
    }
  }

  function toggelConPassVisibity() {
    if (conPassVis) {
      setConPassVis(false);
    } else {
      setConPassVis(true);
    }
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-inputs">
          <input
            type="text"
            placeholder="Full Name"
            value={userName}
            onChange={(e) => {
              e.preventDefault();
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="form-inputs">
          <input
            type="email"
            placeholder="Email Address"
            value={userEmail}
            onChange={(e) => {
              e.preventDefault();
              setUserEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-inputs visibility">
          <input
            type={passVis ? "text" : "password"}
            placeholder="Password"
            value={userPassowrd}
            onChange={(e) => {
              e.preventDefault();
              setUserPassowrd(e.target.value);
            }}
          />
          <span
            className="material-symbols-outlined hide"
            onClick={toggelPasswordVisibity}
          >
            {" "}
            {passVis ? "visibility" : "visibility_off"}{" "}
          </span>
        </div>
        <div className="form-inputs visibility">
          <input
            type={conPassVis ? "text" : "password"}
            placeholder="Confirm Password"
            value={userConfPassword}
            onChange={(e) => {
              e.preventDefault();
              setUserConfPassword(e.target.value);
            }}
          />
          <span
            className="material-symbols-outlined hide"
            onClick={toggelConPassVisibity}
          >
            {" "}
            {conPassVis ? "visibility" : "visibility_off"}{" "}
          </span>
        </div>

        <button type="submit" className="form-btn" onClick={validate}>
          Create Account
        </button>
      </form>
      <ErrorValidate check={check} />
    </div>
  );
};

export default Form;