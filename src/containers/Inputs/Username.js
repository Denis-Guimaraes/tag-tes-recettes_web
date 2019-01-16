// NPM import
import { connect } from 'react-redux';

// Local import
import Username from 'src/components/Inputs/Username';
import { onChange } from 'src/store/reducers/InputReducer';

// Code
const mapStateToProps = state => ({
  username: state.username,
});

const mapDispatchToProps = dispatch => ({
  onChange: (fieldName, value) => {
    dispatch(onChange(fieldName, value));
  },
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(Username);
