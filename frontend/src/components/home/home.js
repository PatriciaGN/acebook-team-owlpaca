import React, { useState } from 'react';
import './home.css'

const HomePage = ({ navigate }) => {
  return (
    <>
    <body>
      <h1>Homepage</h1>
      <div class="container">
      <div>
          <img id="KyleImageHome" src={require('../../images/Kylepixel.png')} alt="Kyle" />
        </div>
        <div class="box2 sb4">
         Welcome to the era of honest grumpy social media!
        </div>   
      </div>
      </body>
    </>
  );
};

export default HomePage;
