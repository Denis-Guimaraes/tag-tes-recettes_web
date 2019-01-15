// NPM import
import React from 'react';
import { Link } from 'react-router-dom';

// Local import

// Styles
import './header.scss';

// Code
const Header = () => (
  <header className="header">
    <h1 className="header__title">
      <Link to="/">
        Tag Tes Recettes
      </Link>
    </h1>
  </header>
);

// Export
export default Header;
