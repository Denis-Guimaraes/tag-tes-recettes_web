// NPM import
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaFileSignature } from 'react-icons/fa';

// Local import

// Styles
import './nav.scss';

// Code
export const LinkAddRecipe = ({ location }) => {
  const iconClass = classNames('nav-item__icon', { 'nav-item__icon--current': location.pathname === '/ajouter' });
  return (
    <li>
      <Link to="/ajouter" className="nav-item">
        <FaFileSignature className={iconClass} />Ajouter
      </Link>
    </li>
  );
};

LinkAddRecipe.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

// Export
export default withRouter(LinkAddRecipe);
