// NPM import
import React from 'react';

// Local import
import Username from 'src/containers/Inputs/Username';
import Email from 'src/containers/Inputs/Email';
import Password from 'src/containers/Inputs/Password';
import ConfirmPassword from 'src/containers/Inputs/ConfirmPassword';

// Styles
import './signup.scss';

// Code
const Signup = () => (
  <form className="signup">
    <h2 className="signup__title">Inscription</h2>
    <Username />
    <Email />
    <Password />
    <ConfirmPassword />
    <button type="button" className="signup__button">Inscription</button>
  </form>
);

// Export
export default Signup;
