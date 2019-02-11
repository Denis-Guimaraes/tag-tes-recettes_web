// NPM import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Book from './Book';

// Styles
import './books.scss';

// Code
const BookList = ({ divClass, books }) => (
  <div className={divClass}>
    <h2 className="book-list__title">Mes livres</h2>
    {books.map(bookData => <Book key={bookData.id} book={bookData} />)}
  </div>
);

BookList.propTypes = {
  divClass: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
};


// Export
export default BookList;
