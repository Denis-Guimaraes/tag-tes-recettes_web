// NPM import
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Local import
import Books from 'src/components/Books';
import Modal from 'src/containers/Modal';
// Styles
import './main.scss';

// Code
const Router = ({ userMessage }) => (
  <main className="main">
    <Switch>
      <Redirect from="/connexion" to="/" />
      <Redirect from="/inscription" to="/" />
      <Route path="/" component={Books} />
    </Switch>
    {userMessage.length > 0 && <Modal />}
  </main>
);

Router.propTypes = {
  userMessage: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

// Export
export default Router;
