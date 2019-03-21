// NPM import
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Local import
import LinkSignin from './LinkSignin';
import LinkSignup from './LinkSignup';
import LinkHome from './LinkHome';

// Styles
import './nav.scss';

// Code
export const NavDisconnected = ({ location }) => (
  <ul className="nav-list">
    {location.pathname !== '/connexion' && <LinkSignin />}
    {location.pathname !== '/' && <LinkHome />}
    {location.pathname !== '/inscription' && <LinkSignup />}
  </ul>
);

NavDisconnected.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

// Export
export default withRouter(NavDisconnected);
