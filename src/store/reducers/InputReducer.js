// initial state
const initialState = {
  email: '',
  password: '',
};

// Action type
const ON_CHANGE = 'ON_CHANGE';

// reducer
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

// action creator
export const onChange = (nameField, value) => ({
  type: ON_CHANGE,
  nameField,
  value,
});

// export
export default InputReducer;
