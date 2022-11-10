import React, { useState } from "react";
import errorHandlerEmail from "../errorHandling/errorHandlerEmail";
import errorHandlerUsersName from "../errorHandling/errorHandlerUsersName";
import errorHandlerPassword from "../errorHandling/errorHandlerPassword";
<<<<<<< HEAD
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import "./signUp.css";
=======

>>>>>>> main

const SignUpForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usersName, setUsersName] = useState("");
<<<<<<< HEAD
  const [profilePicUpload, setProfilePicUpload] = useState(null);
=======
>>>>>>> main

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

<<<<<<< HEAD
    const profilePicURL = await UploadProfilePic();

    await fetch("/users", {
=======
    fetch("/users", {
>>>>>>> main
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        password: password,
        usersName: usersName,
        profilePic: profilePicURL,
      }),
    }).then((response) => {
      if (response.status === 201) {
        navigate("/login");
      } else {
        navigate("/signup");
      }
    });
  };

<<<<<<< HEAD
  const UploadProfilePic = async () => {
    return new Promise((resolve) => {
      const imageRef = ref(
        storage,
        `profilePics/${profilePicUpload.name + v4()}`
      );
      uploadBytes(imageRef, profilePicUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          resolve(url);
        });
      });
    });
  };

=======
>>>>>>> main
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
<<<<<<< HEAD
      <center>
        <h1>Sign-up</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            id="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <br />
          <input
            placeholder="Password"
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />{" "}
          <br />
          <br />
          <input
            placeholder="Name"
            id="usersName"
            type="text"
            value={usersName}
            onChange={handleUsersNameChange}
          />
          <br />
          <br />
          <input id="submit" type="submit" value="Submit" /> <br />
          <br />
          <label for="file-upload" className="custom-file-upload">
            Choose your vein seflie!
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={(event) => {
              setProfilePicUpload(event.target.files[0]);
            }}
          />
        </form>
        <br></br>
        <div id="ErrorMessageEmail">{errorHandlerEmail(email)}</div>
        <div id="ErrorMessagePassword">{errorHandlerPassword(password)}</div>
        <div id="ErrorMessagePassword">{errorHandlerUsersName(usersName)}</div>
      </center>
=======
   
      <h1>Sign-up</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          placeholder="Password"
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          placeholder="Name"
          id="usersName"
          type="text"
          value={usersName}
          onChange={handleUsersNameChange}
        />
        <input id="submit" type="submit" value="Submit" />
      </form>
      <div id="ErrorMessageEmail">{errorHandlerEmail(email)}</div>
      <div id="ErrorMessagePassword">{errorHandlerPassword(password)}</div>
      <div id="ErrorMessagePassword">{errorHandlerUsersName(usersName)}</div>
>>>>>>> main
    </>
  );
};

export default SignUpForm;
