// NPM import
import React from 'react';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

// Local import

// Styles
import './nav.scss';

// Code
const Nav = () => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-item"><FaSignInAlt className="nav-item__icon" />Connexion</li>
      <li className="nav-item"><FaUserPlus className="nav-item__icon" />Inscription</li>
    </ul>
  </nav>
);

// Export
export default Nav;
