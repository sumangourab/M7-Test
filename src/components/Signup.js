import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../AuthProvider";
import './signup.css';

const Signup = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = useContext(StateContext);

  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);

  const [redAlert, setRedAlert] = useState(false);
  const [greenAlert, setGreenAlert] = useState(false);

  const navigate = useNavigate();

  const checkName = (e) => {
    setName(e.target.value);
    if (name.length <= 2 &&
       name.includes(' ') && 
       name.split(" ")[1]) {
      setValidName(false);
    } else {
      setValidName(true);
    }
  };

  const checkEmail = (e) => {
    setEmail(e.target.value);
    if (email.includes("@") &&
    email.includes(".") &&
    email.indexOf("@") !== 0 &&
    email.length - email.lastIndexOf(".") >= 3
    ) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const checkPassword = (e) => {
    setPassword(e.target.value);
    if (password.length < 5) {
      setValidPassword(false);
    } else {
      setValidPassword(true);
    }
  };

  const checkConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (confirmPassword.length < 5) {
      setValidConfirmPassword(false);
    } else {
      setValidConfirmPassword(true);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("localName")) {
      setTimeout(() => {
        navigate("/profile");
      }, 500);
    }
  });

  const onSubmit = () => {

    if(name==="" || email==="" || password==="" || confirmPassword===""){
      setRedAlert(true);
      setGreenAlert(false);
    } 
    else if (
      !validName ||
      !validEmail ||
      password !== confirmPassword ||
      !validPassword
    ) {
      
      if (!validName) {
        alert("Please enter a valid name");
      } else if (!validEmail) {
        alert("Please enter a valid email");
      } else if (password !== confirmPassword) {
        alert("Password do not match");
      } else if (password.length <= 5 ) {
        alert("Password must be atleast 6 characters");
      }
    } else {
      setRedAlert(false);
      setGreenAlert(true);
      localStorage.setItem("localName", name);
      localStorage.setItem("localEmail", email);
      localStorage.setItem("localPassword", password);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        navigate("/");
      }, 0);
    }
  };
  return (
    <div className="signUp">
      <div className="innerBox">
        <h1>Signup</h1>
        <div className="flexi">
          <input className="input" placeholder="Full Name" value={name} onChange={checkName} />
        </div>
        <div className="flexi">
          <input className="input" placeholder="Email" value={email} onChange={checkEmail} />
        </div>

        <div className="flexi">
          <input className="input"
            placeholder="Password"
            value={password}
            onChange={checkPassword}
          />
        </div>

        <div className="flexi">
          <input className="input"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={checkConfirmPassword}
          />
        </div>

        <div className="alert-text">
          <h2 className={`red ${!redAlert ? "none" : "block"}`}>
            Error : All the fields are mandatory
          </h2>
          <h2 className={`green ${!greenAlert ? "none" : "block"}`}>
            Successfully Signed Up!
          </h2>
          <button
        onClick={onSubmit}
        className="bttn">Signup
      </button>
        </div>
       
      </div>

      
    </div>
    
  );
};

export default Signup;
