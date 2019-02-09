// NPM import
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// Local import
import Home from 'src/components/Home';
import Signin from 'src/containers/Signin';
import Signup from 'src/containers/Signup';
import Modal from 'src/containers/Modal';
import Router from 'src/containers/Main/Router';

// Styles
import './main.scss';

// Code
const Main = ({ userMessage, userToken }) => {
  if (userToken.length > 0) {
    return (
      <Router />
    );
  }
  return (
    <main className="main">
      <Route exact path="/" component={Home} />
      <Route path="/connexion" component={Signin} />
      <Route path="/inscription" component={Signup} />
      {userMessage.length > 0 && <Modal />}
    </main>
  );
};

Main.propTypes = {
  userMessage: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  userToken: PropTypes.string.isRequired,
};

// Export
export default Main;
