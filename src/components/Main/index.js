// NPM import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import Home from 'src/components/Home';
import Signin from 'src/components/Signin';
import Signup from 'src/containers/Signup';

// Styles
import './main.scss';

// Code
const Main = () => (
  <main className="main">
    <Route exact path="/" component={Home} />
    <Route path="/connexion" component={Signin} />
    <Route path="/inscription" component={Signup} />
  </main>
);

// Export
export default Main;
