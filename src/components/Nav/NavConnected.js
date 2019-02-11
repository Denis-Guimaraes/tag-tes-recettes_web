// NPM import
import React from 'react';

// Local import
import LinkMyBooks from './LinkMyBooks';
import LinkMyFavorites from './LinkMyFavorites';
import LinkAddRecipe from './LinkAddRecipe';
import LinkSearchRecipes from './LinkSearchRecipes';

// Styles
import './nav.scss';

// Code
const NavConnected = () => (
  <ul className="nav-list">
    <LinkMyBooks />
    <LinkMyFavorites />
    <LinkAddRecipe />
    <LinkSearchRecipes />
  </ul>
);

// Export
export default NavConnected;
