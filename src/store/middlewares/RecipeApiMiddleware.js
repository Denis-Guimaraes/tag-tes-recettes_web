// NPM import
import axios from 'axios';

// Local import
import { storeUserMessage } from 'src/store/reducers/UserReducer';
import { storeRecipes } from 'src/store/reducers/RecipeReducer';

// Code
// Preset axios
const axiosUser = axios.create({
  baseURL: 'http://localhost:3000/recipes',
  timeout: 10000,
});

// Action type
const GET_FAVORITES_RECIPES = 'GET_FAVORITES_RECIPES';

// Middleware
const RecipeApiMiddleware = store => next => (action) => {
  const storeData = store.getState();
  switch (action.type) {
    case GET_FAVORITES_RECIPES:
      axiosUser({
        method: 'get',
        url: '/favorites',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${storeData.user.userToken}`,
        },
      }).then((response) => {
        store.dispatch(storeRecipes(response.data));
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
export const getFavoritesRecipes = () => ({
  type: GET_FAVORITES_RECIPES,
});

// Export
export default RecipeApiMiddleware;
