// NPM import
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Local import
import Router from 'src/components/Main/Router';

// Code
const mapStateToProps = state => ({
  userMessage: state.user.userMessage,
});

const mapDispatchToProps = () => ({});

// Export
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Router));
