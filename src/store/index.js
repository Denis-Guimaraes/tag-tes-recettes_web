// npm import
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';

// Local import
import InputReducer from './reducers/InputReducer';
import UserReducer from './reducers/UserReducer';
import UserApiMiddleware from './middlewares/UserApiMiddleware';

// Code
// Preload store
const preloadStore = () => {
  if (window.localStorage.getItem('user') !== null) {
    let userData = window.localStorage.getItem('user');
    userData = JSON.parse(userData);
    return {
      userData: userData.user,
      userToken: userData.token,
      userMessage: [],
    };
  }
  return {
    userData: {},
    userToken: '',
    userMessage: [],
  };
};
// Prepare middlewares
const devTools = [];
if (window.devToolsExtension) {
  // eslint-disable-next-line no-underscore-dangle
  devTools.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
const appliedMiddleware = applyMiddleware(UserApiMiddleware);
const enhancers = compose(appliedMiddleware, ...devTools);
// Prepare reducers
const rootReducer = combineReducers({
  input: InputReducer,
  user: UserReducer,
});
// Create store
const store = createStore(rootReducer, { user: preloadStore() }, enhancers);

// Export
export default store;
