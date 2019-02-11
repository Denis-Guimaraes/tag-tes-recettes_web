// NPM import
import axios from 'axios';

// Local import
import { storeUserMessage } from 'src/store/reducers/UserReducer';
import { storeBooks } from 'src/store/reducers/BookReducer';

// Code
// Preset axios
const axiosUser = axios.create({
  baseURL: 'http://localhost:3000/books',
  timeout: 10000,
});

// Action type
const GET_ALL_BOOKS = 'GET_ALL_BOOKS';

// Middleware
const BookApiMiddleware = store => next => (action) => {
  const storeData = store.getState();
  switch (action.type) {
    case GET_ALL_BOOKS:
      axiosUser({
        method: 'get',
        url: '/',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${storeData.user.userToken}`,
        },
      }).then((response) => {
        store.dispatch(storeBooks(response.data));
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
export const getAllBooks = () => ({
  type: GET_ALL_BOOKS,
});

// Export
export default BookApiMiddleware;
