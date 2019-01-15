// NPM import
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

// Local import

// Styles
import './nav.scss';

// Code
const LinkSignin = () => (
  <li>
    <Link to="/connexion" className="nav-item">
      <FaSignInAlt className="nav-item__icon" />Connexion
    </Link>
  </li>
);

// Export
export default LinkSignin;
