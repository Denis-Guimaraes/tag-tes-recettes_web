// NPM import
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaArrowAltCircleRight } from 'react-icons/fa';

// Local import

// Styles
import './books.scss';

// Code
const Book = ({ book }) => (
  <Link to={`/mes-livres/${book.id}/recettes`} className="book">
    <p className="book__title">{book.name}</p>
    <FaArrowAltCircleRight className="book__icon" />
  </Link>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

// Export
export default Book;
