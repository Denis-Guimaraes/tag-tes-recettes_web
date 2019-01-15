// NPM import
import { connect } from 'react-redux';

// Local import
import Password from 'src/components/Inputs/Password';
import { onChange } from 'src/store/reducers/InputReducer';

// Code
const mapStateToProps = state => ({
  password: state.password,
});

const mapDispatchToProps = dispatch => ({
  onChange: (fieldName, value) => {
    dispatch(onChange(fieldName, value));
  },
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(Password);
