// Initial state
const initialState = {
  userData: {
    username: '',
    email: '',
  },
  userError: [],
};

// Action type
const STORE_USER_DATA = 'STORE_USER_DATA';
const STORE_USER_ERROR = 'STORE_USER_ERROR';

// Reducer
const UserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STORE_USER_DATA:
      return {
        ...state,
        userData: { ...action.value },
      };
    case STORE_USER_ERROR:
      return {
        ...state,
        userError: [...action.value],
      };
    default:
      return state;
  }
};

// Action creator
export const storeUserData = value => ({
  type: STORE_USER_DATA,
  value,
});
export const storeUserError = value => ({
  type: STORE_USER_ERROR,
  value,
});

// Export
export default UserReducer;
