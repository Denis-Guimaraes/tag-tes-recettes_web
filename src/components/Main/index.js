// NPM import
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// Local import
import Home from 'src/components/Home';
import Signin from 'src/containers/Signin';
import Signup from 'src/containers/Signup';
import Modal from 'src/containers/Modal';

// Styles
import './main.scss';

// Code
const Main = ({ userMessage }) => (
  <main className="main">
    <Route exact path="/" component={Home} />
    <Route path="/connexion" component={Signin} />
    <Route path="/inscription" component={Signup} />
    {userMessage.length > 0 && <Modal />}
  </main>
);

Main.propTypes = {
  userMessage: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

// Export
export default Main;
