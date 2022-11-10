import React, { useState } from 'react';
import errorHandlerEmail from '../errorHandling/errorHandlerEmail';
import errorHandlerUsersName from '../errorHandling/errorHandlerUsersName';
import errorHandlerPassword from '../errorHandling/errorHandlerPassword';
import "./SignUpForm.css";

const SignUpForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usersName, setUsersName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email === "" || password === "" || usersName === "") return;
    if (
      !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ||
      !password.match(/^[a-zA-Z0-9]{4,25}$/) ||
      !usersName.match(/^[a-z ,.'-]*$/i)
    )
      return;
    if (!usersName.match(/^[a-z ,.'-]*$/i)) return;

    fetch("/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        password: password,
        usersName: usersName,
      }),
    }).then((response) => {
      if (response.status === 201) {
        navigate("/login");
      } else {
        navigate("/signup");
      }
    });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsersNameChange = (event) => {
    setUsersName(event.target.value);
  };

  return (
    <>
    <div id='main-signup-container'>
      <h1>Sign-up</h1>
      <div class="container">
        <form class="form-sign-up" onSubmit={handleSubmit}>
        <h2 class="form-signin-heading">Sign-up</h2>
            <input
              placeholder="Name"
              id="usersName"
              type="text"
              value={usersName}
              onChange={handleUsersNameChange}
             /><br></br>
            <input
              placeholder="Email"
              id="email"
              type="text"
              value={email}
              onChange={handleEmailChange}
            /><br></br>
            <input
              placeholder="Password"
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            /><br></br>
            <br></br>
            <input id="submit" type="submit" value="Submit" />
          </form>
        <div class="box sb1">
          <div id="ErrorMessagePassword">{errorHandlerUsersName(usersName)}</div>
          <div id="ErrorMessageEmail">{errorHandlerEmail(email)}</div>
          <div id="ErrorMessagePassword">{errorHandlerPassword(password)}</div>
        </div>   
        <div>
          <img id="KyleImage" src={require('../../images/Kylepixel.png')} alt="Kyle" />
        </div>
      </div>
      </div>
    </>
  );
};

export default SignUpForm;
