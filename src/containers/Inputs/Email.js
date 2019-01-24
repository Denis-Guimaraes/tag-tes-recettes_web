// NPM import
import { connect } from 'react-redux';

// Local import
import Email from 'src/components/Inputs/Email';
import { onChange } from 'src/store/reducers/InputReducer';

// Code
const mapStateToProps = state => ({
  email: state.input.email,
});

const mapDispatchToProps = dispatch => ({
  onChange: (fieldName, value) => {
    dispatch(onChange(fieldName, value));
  },
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(Email);
