import React from "react";
import "./App.css";
import Signup from "./components/Signup/Signup";
import logo from "./components/image/pagelogo.png";

const App = () => {
  return (
    <div className="App-background">
      <div className="App-tag-line">
        <p className="App-text">Find 3D Objects, Mockups and Ilustration here</p>
      </div>
      <div className="App-logo">
        <img src={logo} alt="page logo" className="page-logo" />
      </div>
      <Signup />
    </div>
  );
};

export default App;