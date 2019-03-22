// Initial state
const initialState = {
  recipes: [],
};

// Action type
export const STORE_RECIPES = 'STORE_RECIPES';

// Reducer
const RecipeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STORE_RECIPES:
      return {
        ...state,
        recipes: [...action.recipes],
      };
    default:
      return state;
  }
};

// Action creator
export const storeRecipes = recipes => ({
  type: STORE_RECIPES,
  recipes,
});

// Export
export default RecipeReducer;
