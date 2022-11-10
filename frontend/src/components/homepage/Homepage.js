import React, { useState } from 'react';

const Homepage = ({ navigate }) => {
  const handleLoginClick = async (event) => {
    event.preventDefault();
    navigate('/login');
  };

  const handleSignUpClick = async (event) => {
    event.preventDefault();
    navigate('/signup');
  };

  return (
    <>
      <h1>Welcome to Grumblebook</h1>
      <button
        onClick={(event) => {
          handleSignUpClick(event);
        }}
      >
        Sign Up & start grumbling
      </button>{' '}
      <br></br>
      <button
        onClick={(event) => {
          handleLoginClick(event);
        }}
      >
        Login & grumble some more
      </button>{' '}
      <br></br>
    </>
  );
};

export default Homepage;
