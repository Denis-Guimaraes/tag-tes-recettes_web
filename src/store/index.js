// npm import
import { createStore } from 'redux';

// local import
import reducer from './reducer';

// code
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

const store = createStore(reducer, ...devTools);

// Export
export default store;
