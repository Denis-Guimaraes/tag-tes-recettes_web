// NPM import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import NavDisconnected from './NavDisconnected';
import NavConnected from './NavConnected';

// Styles
import './nav.scss';

// Code
const Nav = ({ userToken }) => (
  <nav className="nav">
    {userToken.length <= 0 ? <NavDisconnected /> : <NavConnected />}
  </nav>
);

Nav.propTypes = {
  userToken: PropTypes.string.isRequired,
};

// Export
export default Nav;
