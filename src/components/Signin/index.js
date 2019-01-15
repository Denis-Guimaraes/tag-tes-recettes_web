// NPM import
import React from 'react';

// Local import
import Email from 'src/containers/Inputs/Email';
import Password from 'src/containers/Inputs/Password';

// Styles
import './signin.scss';

// Code
const Signin = () => (
  <form className="signin">
    <h2 className="signin__title">Connexion</h2>
    <Email />
    <Password />
    <button type="button" className="signin__button">Connexion</button>
  </form>
);

// Export
export default Signin;
