// NPM import
import { connect } from 'react-redux';

// Local import
import MagazineList from 'src/components/Books/MagazineList';

// Code
const mapStateToProps = state => ({
  books: state.book.books.filter(book => book.type.id === 2),
});

const mapDispatchToProps = () => ({});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(MagazineList);
