// Initial state
const initialState = {
  userData: {},
  userToken: '',
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
        userData: { ...action.user },
        userToken: action.token,
      };
    case STORE_USER_MESSAGE:
      return {
        ...state,
        userMessage: [...action.message],
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
export const storeUserData = (user, token) => ({
  type: STORE_USER_DATA,
  user,
  token,
});
export const storeUserMessage = message => ({
  type: STORE_USER_MESSAGE,
  message,
});
export const deleteUserMessage = () => ({
  type: DELETE_USER_MESSAGE,
});

// Export
export default UserReducer;
