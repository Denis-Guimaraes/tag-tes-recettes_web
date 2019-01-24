// NPM import
import axios from 'axios';

// Local import
import { storeUserData, storeUserError } from 'src/store/reducers/UserReducer';

// Code
// Preset axios
const axiosUser = axios.create({
  baseURL: 'http://localhost:3000/user',
  timeout: 10000,
});

// Action type
const SIGNUP = 'SIGNUP';

// Middleware
const UserApiMiddleware = store => next => (action) => {
  const storeData = store.getState();
  switch (action.type) {
    case SIGNUP:
      axiosUser({
        method: 'post',
        url: '/signup',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        data: {
          username: storeData.input.username,
          email: storeData.input.email,
          password: storeData.input.password,
          confirmPassword: storeData.input.confirmPassword,
        },
      }).then((response) => {
        store.dispatch(storeUserData(response.data));
      }).catch((error) => {
        store.dispatch(storeUserError(error.response.data.error));
      });
      break;
    default:
      next(action);
  }
};

// Action creator
export const signup = () => ({
  type: SIGNUP,
});

// Export
export default UserApiMiddleware;
