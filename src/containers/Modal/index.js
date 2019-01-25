// NPM import
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Local import
import Modal from 'src/components/Modal';
import { deleteUserMessage } from 'src/store/reducers/UserReducer';

// Code
const mapStateToProps = state => ({
  userMessage: state.user.userMessage,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => {
    dispatch(deleteUserMessage());
  },
});

// Export
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));
