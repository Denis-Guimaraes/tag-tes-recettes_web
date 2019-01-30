// NPM import
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Local import
import Main from 'src/components/Main';

// Code
const mapStateToProps = state => ({
  userMessage: state.user.userMessage,
});

const mapDispatchToProps = () => ({});

// Export
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
