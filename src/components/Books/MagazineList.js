// NPM import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Book from './Book';

// Styles
import './books.scss';

// Code
const MagazineList = ({ divClass, books }) => (
  <div className={divClass}>
    <h2 className="book-list__title">Mes magazines</h2>
    {books.map(bookData => <Book key={bookData.id} book={bookData} />)}
  </div>
);

MagazineList.propTypes = {
  divClass: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
};


// Export
export default MagazineList;
