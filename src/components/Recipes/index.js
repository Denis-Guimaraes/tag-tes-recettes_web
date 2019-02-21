// NPM import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Recipe from './Recipe';

// Styles
import './recipes.scss';

// Code
class Recipes extends React.Component {
  static propTypes = {
    getRecipes: PropTypes.func.isRequired,
    recipes: PropTypes.array.isRequired,
    match: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    const { getRecipes } = this.props;
    getRecipes();
  }

  componentDidUpdate(prevProps) {
    const { match, getRecipes } = this.props;
    if (match.path !== prevProps.match.path) {
      getRecipes();
    }
  }

  render() {
    const { recipes } = this.props;
    return (
      <section className="recipes">
        {recipes.map(recipe => <Recipe key={recipe.id} recipeData={recipe} />)}
      </section>
    );
  }
}

// Export
export default Recipes;
