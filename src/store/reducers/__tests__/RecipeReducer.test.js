// Local import
import RecipeReducer, { STORE_RECIPES, storeRecipes } from 'src/store/reducers/RecipeReducer';

describe('RecipeReducer', () => {
  const initialState = { recipes: [] };
  const recipes = [{ name: 'name' }];
  it('reducer should return initial state', () => {
    expect(RecipeReducer(undefined, {})).toEqual(initialState);
  });
  it('action storeRecipes return good object', () => {
    const expectAction = { type: STORE_RECIPES, recipes };
    expect(storeRecipes(recipes)).toEqual(expectAction);
  });
  it('reducer should return new state with recipes', () => {
    expect(RecipeReducer(initialState, storeRecipes(recipes))).toEqual({ recipes });
  });
});
