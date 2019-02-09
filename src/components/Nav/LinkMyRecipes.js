// NPM import
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaBookOpen } from 'react-icons/fa';

// Local import

// Styles
import './nav.scss';

// Code
const LinkMyRecipes = ({ location }) => {
  const iconClass = classNames('nav-item__icon', { 'nav-item__icon--current': location.pathname === '/' });
  return (
    <li>
      <Link to="/" className="nav-item">
        <FaBookOpen className={iconClass} />Accueil
      </Link>
    </li>
  );
};

LinkMyRecipes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

// Export
export default withRouter(LinkMyRecipes);
