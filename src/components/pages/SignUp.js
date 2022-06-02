import React, { useState } from "react";
import PatientDetails from "./PatientDetails";
import Info from "../Info";

import "./Login.css";

function SignUp() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

 const [user, setUser] = useState({});
 

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        userid: uname.value,
        password: pass.value
      }),
    };

    fetch("https://pk-hospitals.herokuapp.com/auth", options)
    .then(res => res.json())
    .then(result => {
      if (result.authenticated === true) {
        
        console.log(result);
        setUser({
          name : result.name,
          dob : result.dob,
          ph : result.ph
        })

        setIsSubmitted(true);
      }
      
      else {
        setErrorMessages({ name: "pass", message: errors.pass });
      }
    })
    .catch(err => console.log("Error while fetching data: ", err));
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <>
      <Info />
      <div className="signUp">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? <PatientDetails{...user}/> : renderForm}
        </div>
      </div>
    </>
  );
}

export default SignUp;


