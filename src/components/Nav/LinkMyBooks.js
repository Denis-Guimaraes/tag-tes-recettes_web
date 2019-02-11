// NPM import
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaBook } from 'react-icons/fa';

// Local import

// Styles
import './nav.scss';

// Code
const LinkMybooks = ({ location }) => {
  const iconClass = classNames('nav-item__icon', { 'nav-item__icon--current': location.pathname === '/mes-livres' });
  return (
    <li>
      <Link to="/mes-livres" className="nav-item">
        <FaBook className={iconClass} />Mes livres
      </Link>
    </li>
  );
};

LinkMybooks.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

// Export
export default withRouter(LinkMybooks);
