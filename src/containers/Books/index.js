// NPM import
import { connect } from 'react-redux';

// Local import
import Books from 'src/components/Books';
import { getAllBooks } from 'src/store/middlewares/BookApiMiddleware';

// Code
const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  getAllBooks: () => {
    dispatch(getAllBooks());
  },
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(Books);
