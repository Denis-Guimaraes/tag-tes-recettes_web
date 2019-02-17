// NPM import
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Local import
import Recipes from 'src/components/Recipes';
import { getRecipesFromBook } from 'src/store/middlewares/BookApiMiddleware';

// Code
const mapStateToProps = state => ({
  recipes: state.recipe.recipes,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getRecipes: () => {
    dispatch(getRecipesFromBook(ownProps.match.params.id));
  },
});

// Export
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recipes));
