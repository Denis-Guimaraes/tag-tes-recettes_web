// NPM import
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

// Local import
import Username from 'src/containers/Inputs/Username';
import Email from 'src/containers/Inputs/Email';
import Password from 'src/containers/Inputs/Password';
import ConfirmPassword from 'src/containers/Inputs/ConfirmPassword';

// Styles
import './signup.scss';

// Code
const Signup = ({ location }) => {
  const signupClass = classNames('signup', {
    'signup--show': location.pathname === '/inscription',
  });
  return (
    <form className={signupClass}>
      <h2 className="signup__title">Inscription</h2>
      <Username inputId="signup-username" />
      <Email inputId="signup-email" />
      <Password inputId="signup-password" />
      <ConfirmPassword inputId="signup-confirm_password" />
      <button type="button" className="signup__button">Inscription</button>
    </form>
  );
};

Signup.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

// Export
export default withRouter(Signup);
