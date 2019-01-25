// Initial state
const initialState = {
  userData: {},
  userMessage: [],
};

// Action type
const STORE_USER_DATA = 'STORE_USER_DATA';
const STORE_USER_MESSAGE = 'STORE_USER_MESSAGE';
const DELETE_USER_MESSAGE = 'DELETE_USER_MESSAGE';

// Reducer
const UserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STORE_USER_DATA:
      return {
        ...state,
        userData: { ...action.value },
      };
    case STORE_USER_MESSAGE:
      return {
        ...state,
        userMessage: [...action.value],
      };
    case DELETE_USER_MESSAGE:
      return {
        ...state,
        userMessage: [],
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
export const storeUserMessage = value => ({
  type: STORE_USER_MESSAGE,
  value,
});
export const deleteUserMessage = () => ({
  type: DELETE_USER_MESSAGE,
});

// Export
export default UserReducer;
