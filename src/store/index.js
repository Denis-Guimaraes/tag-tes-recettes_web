// npm import
import { createStore } from 'redux';

// local import
import InputReducer from './reducers/InputReducer';

// code
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

const store = createStore(InputReducer, ...devTools);

// Export
export default store;
