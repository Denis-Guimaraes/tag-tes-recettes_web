// NPM import
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';

// Local import

// Styles
import './books.scss';

// Code
const MagazineList = () => (
  <div>
    <Link to="/mes-livres/2/recettes" className="book">
      <p className="book__title">Nom d'un livre</p>
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


// Export
export default MagazineList;
