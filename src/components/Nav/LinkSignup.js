// NPM import
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';

// Local import

// Styles
import './nav.scss';

// Code
const LinkSignup = () => (
  <li>
    <Link to="/inscription" className="nav-item">
      <FaUserPlus className="nav-item__icon" />Inscription
    </Link>
  </li>
);

// Export
export default LinkSignup;
