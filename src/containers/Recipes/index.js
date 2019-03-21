// NPM import
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Local import
import Recipes from 'src/components/Recipes';
import { getRecipesFromBook } from 'src/store/middlewares/BookApiMiddleware';
import { getFavoritesRecipes } from 'src/store/middlewares/RecipeApiMiddleware';

// Code
// Return action according to path
export const getAction = (ownProps) => {
  if (ownProps.match.params.id) {
    return getRecipesFromBook(ownProps.match.params.id);
  }
  return getFavoritesRecipes();
};

const mapStateToProps = state => ({
  recipes: state.recipe.recipes,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getRecipes: () => {
    dispatch(getAction(ownProps));
  },
});

// Export
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recipes));
