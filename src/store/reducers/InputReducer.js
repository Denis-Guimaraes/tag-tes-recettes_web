// Initial state
const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

// Action type
const ON_CHANGE = 'ON_CHANGE';
const RESET_INPUT = 'RESET_INPUT';

// Reducer
const InputReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_CHANGE:
      return {
        ...state,
        [action.nameField]: action.value,
      };
    case RESET_INPUT:
      return initialState;
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
export const resetInput = () => ({
  type: RESET_INPUT,
});

// Export
export default InputReducer;
