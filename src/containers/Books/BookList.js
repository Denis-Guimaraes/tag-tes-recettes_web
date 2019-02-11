// NPM import
import { connect } from 'react-redux';

// Local import
import BookList from 'src/components/Books/BookList';

// Code
const mapStateToProps = state => ({
  books: state.book.books.filter(book => book.type.id === 1),
});

const mapDispatchToProps = () => ({});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
