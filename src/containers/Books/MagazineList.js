// NPM import
import { connect } from 'react-redux';

// Local import
import MagazineList from 'src/components/Books/MagazineList';

// Code
export const filterBooks = books => books.filter(book => book.type.id === 2);

const mapStateToProps = state => ({
  books: filterBooks(state.book.books),
});

const mapDispatchToProps = () => ({});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(MagazineList);
