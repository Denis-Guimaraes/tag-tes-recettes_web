// NPM import
import React from 'react';

// Local import
import LinkMyRecipes from './LinkMyRecipes';

// Styles
import './nav.scss';

// Code
const NavConnected = () => (
  <ul className="nav-list">
    <LinkMyRecipes />
  </ul>
);

// Export
export default NavConnected;
