// NPM import
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

// Local import

// Styles
import './nav.scss';

// Code
const LinkHome = () => (
  <li>
    <Link to="/" className="nav-item">
      <FaHome className="nav-item__icon" />Accueil
    </Link>
  </li>
);

// Export
export default LinkHome;
