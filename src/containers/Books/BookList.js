// NPM import
import { connect } from 'react-redux';

// Local import
import BookList from 'src/components/Books/BookList';

// Code
// Filter books by type
export const filterBooks = books => books.filter(book => book.type.id === 1);

const mapStateToProps = state => ({
  books: filterBooks(state.book.books),
});

const mapDispatchToProps = () => ({});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
