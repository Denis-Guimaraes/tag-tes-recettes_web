// NPM import
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Local import
import Signup from 'src/components/Signup';
import { signup } from 'src/store/middlewares/UserApiMiddleware';

// Code
const mapStateToProps = state => ({
  email: state.input.email,
  password: state.input.password,
  confirmPassword: state.input.confirmPassword,
  userData: state.user.userData,
  userError: state.user.userError,
});

const mapDispatchToProps = dispatch => ({
  submitSignup: () => {
    dispatch(signup());
  },
});

// Export
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
