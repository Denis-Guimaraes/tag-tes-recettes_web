// NPM import
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Local import
import Nav from 'src/components/Nav';

// Code
const mapStateToProps = state => ({
  userToken: state.user.userToken,
});

const mapDispatchToProps = () => ({});

// Export
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
