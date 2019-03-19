// NPM import
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaSearch } from 'react-icons/fa';

// Local import

// Styles
import './nav.scss';

// Code
export const LinkSearchRecipes = ({ location }) => {
  const iconClass = classNames('nav-item__icon', { 'nav-item__icon--current': location.pathname === '/rechercher' });
  return (
    <li>
      <Link to="/rechercher" className="nav-item">
        <FaSearch className={iconClass} />Rechercher
      </Link>
    </li>
  );
};

LinkSearchRecipes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

// Export
export default withRouter(LinkSearchRecipes);
