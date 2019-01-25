// NPM import
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Local import
import Signin from 'src/components/Signin';
import { signin } from 'src/store/middlewares/UserApiMiddleware';

// Code
const mapStateToProps = state => ({
  email: state.input.email,
  password: state.input.password,
  userMessage: state.user.userMessage,
});

const mapDispatchToProps = dispatch => ({
  submitSignin: () => {
    dispatch(signin());
  },
});

// Export
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signin));
