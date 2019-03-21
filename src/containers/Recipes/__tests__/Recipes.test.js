// Local import
import { getAction } from 'src/containers/Recipes';
import { getRecipesFromBook } from 'src/store/middlewares/BookApiMiddleware';
import { getFavoritesRecipes } from 'src/store/middlewares/RecipeApiMiddleware';

describe('Recipes containers', () => {
  it('return action getRecipesFromBook if match params', () => {
    const props = { match: { params: { id: true } } };
    const expectAction = getRecipesFromBook(props.match.params.id);
    const action = getAction(props);
    expect(action).toEqual(expectAction);
  });
  it('return action getFavoritesRecipes if don\'t match params', () => {
    const props = { match: { params: { id: false } } };
    const expectAction = getFavoritesRecipes();
    const action = getAction(props);
    expect(action).toEqual(expectAction);
  });
});
