// NPM import
import { connect } from 'react-redux';

// Local import
import Main from 'src/components/Main';

// Code
const mapStateToProps = state => ({
  userMessage: state.user.userMessage,
});

const mapDispatchToProps = () => ({});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(Main);
