// Initial state
const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

// Action type
const ON_CHANGE = 'ON_CHANGE';

// Reducer
const InputReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_CHANGE:
      return {
        ...state,
        [action.nameField]: action.value,
      };
    default:
      return state;
  }
};

// Action creator
export const onChange = (nameField, value) => ({
  type: ON_CHANGE,
  nameField,
  value,
});

// Export
export default InputReducer;
