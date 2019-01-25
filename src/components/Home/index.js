// NPM import
import React from 'react';

// Local import
import Signin from 'src/components/Signin';
import Signup from 'src/containers/Signup';
import Resume from './Resume';

// Styles
import './home.scss';

// Code
const Home = () => (
  <div className="home">
    <Signin />
    <div className="home__wrapper">
      <Resume />
      <Signup />
    </div>
  </div>
);

// Export
export default Home;
