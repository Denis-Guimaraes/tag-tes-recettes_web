// NPM import
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaFileAlt } from 'react-icons/fa';

// Local import

// Styles
import './nav.scss';

// Code
const LinkMyFavorites = ({ location }) => {
  const iconClass = classNames('nav-item__icon', { 'nav-item__icon--current': location.pathname === '/mes-recettes' });
  return (
    <li>
      <Link to="/mes-favorites" className="nav-item">
        <FaFileAlt className={iconClass} />Mes favorites
      </Link>
    </li>
  );
};

LinkMyFavorites.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

// Export
export default withRouter(LinkMyFavorites);
