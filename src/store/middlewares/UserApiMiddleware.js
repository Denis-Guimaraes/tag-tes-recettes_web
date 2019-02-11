// NPM import
import axios from 'axios';

// Local import
import { storeUserData, storeUserMessage } from 'src/store/reducers/UserReducer';
import { resetInput } from 'src/store/reducers/InputReducer';

// Code
// Preset axios
const axiosUser = axios.create({
  baseURL: 'http://localhost:3000/users',
  timeout: 10000,
});

// Action type
const SIGNUP = 'SIGNUP';
const SIGNIN = 'SIGNIN';

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
        store.dispatch(storeUserMessage(response.data));
        store.dispatch(resetInput());
      }).catch((error) => {
        if (!error.response) {
          const message = ['Le serveur ne répond pas. Veuillez réessayer plus tard!'];
          store.dispatch(storeUserMessage(message));
        }
        else {
          store.dispatch(storeUserMessage(error.response.data));
        }
      });
      break;
    case SIGNIN:
      axiosUser({
        method: 'post',
        url: '/signin',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        data: {
          email: storeData.input.email,
          password: storeData.input.password,
        },
      }).then((response) => {
        const data = JSON.stringify(response.data);
        window.localStorage.setItem('user', data);
        store.dispatch(storeUserData(response.data.user, response.data.token));
        store.dispatch(resetInput());
      }).catch((error) => {
        if (!error.response) {
          const message = ['Le serveur ne répond pas. Veuillez réessayer plus tard!'];
          store.dispatch(storeUserMessage(message));
        }
        else {
          store.dispatch(storeUserMessage(error.response.data));
        }
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
export const signin = () => ({
  type: SIGNIN,
});

// Export
export default UserApiMiddleware;
