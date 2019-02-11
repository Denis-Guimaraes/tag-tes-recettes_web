// NPM import
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaArrowAltCircleRight } from 'react-icons/fa';

// Local import

// Styles
import './books.scss';

// Code
const MagazineList = ({ divClass }) => (
  <div className={divClass}>
    <h2 className="book-list__title">Mes magazines</h2>
    <Link to="/mes-livres/2/recettes" className="book">
      <p className="book__title">Nom d'un magazine</p>
      <FaArrowAltCircleRight className="book__icon" />
    </Link>
    <Link to="/mes-livres/4/recettes" className="book">
      <p className="book__title">Envie de chocolat</p>
      <FaArrowAltCircleRight className="book__icon" />
    </Link>
    <Link to="/mes-livres/9/recettes" className="book">
      <p className="book__title">Fou de pâtisserie</p>
      <FaArrowAltCircleRight className="book__icon" />
    </Link>
  </div>
);

MagazineList.propTypes = {
  divClass: PropTypes.string.isRequired,
};


// Export
export default MagazineList;
