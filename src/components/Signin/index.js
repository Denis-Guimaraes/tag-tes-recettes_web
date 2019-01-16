// NPM import
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

// Local import
import Email from 'src/containers/Inputs/Email';
import Password from 'src/containers/Inputs/Password';

// Styles
import './signin.scss';

// Code
const Signin = ({ location }) => {
  const signinClass = classNames('signin', { 'signin--show': location.pathname === '/connexion' });
  return (
    <form className={signinClass}>
      <h2 className="signin__title">Connexion</h2>
      <Email inputId="signin-email" />
      <Password inputId="signin-password" />
      <button type="button" className="signin__button">Connexion</button>
    </form>
  );
};

Signin.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

// Export
export default withRouter(Signin);
