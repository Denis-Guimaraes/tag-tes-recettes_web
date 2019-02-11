// NPM import
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Local import
import Books from 'src/containers/Books';
import Recipes from 'src/components/Recipes';
import AddRecipe from 'src/components/AddRecipe';
import SearchRecipes from 'src/components/SearchRecipes';
import Modal from 'src/containers/Modal';
// Styles
import './main.scss';

// Code
const Router = ({ userMessage }) => (
  <main className="main">
    <Switch>
      <Route exact path="/mes-livres" component={Books} />
      <Route exact path="/mes-livres/:id(\d+)/recettes" component={Recipes} />
      <Route exact path="/mes-favorites" component={Recipes} />
      <Route exact path="/ajouter" component={AddRecipe} />
      <Route exact path="/rechercher" component={SearchRecipes} />
      <Redirect to="/mes-livres" />
    </Switch>
    {userMessage.length > 0 && <Modal />}
  </main>
);

Router.propTypes = {
  userMessage: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

// Export
export default Router;
