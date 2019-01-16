// NPM import
import { connect } from 'react-redux';

// Local import
import ConfirmPassword from 'src/components/Inputs/ConfirmPassword';
import { onChange } from 'src/store/reducers/InputReducer';

// Code
const mapStateToProps = state => ({
  confirmPassword: state.confirmPassword,
});

const mapDispatchToProps = dispatch => ({
  onChange: (fieldName, value) => {
    dispatch(onChange(fieldName, value));
  },
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPassword);
