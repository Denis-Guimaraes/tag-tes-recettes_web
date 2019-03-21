// NPM import
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaFileSignature } from 'react-icons/fa';

// Local import

// Styles
import './recipes.scss';

// Code
const Recipe = ({ recipeData }) => (
  <div className="recipe">
    <div className="recipe-wrapper">
      <div className="recipe-info">
        <span className="recipe-info__name">Recette : {recipeData.name}</span>
        <span className="recipe-info__book">Livre : {recipeData.book.name}</span>
        <span className="recipe-info__page">Page : {recipeData.page}</span>
      </div>
      <Link to="/recettes/2/editer" className="recipe-edit">
        <FaFileSignature className="recipe-edit__icon" />Editer
      </Link>
    </div>
    <div className="recipe-tags">
      {recipeData.tags.map(tag => (
        <span className="recipe-tags__tag" key={tag.id}>{tag.name}</span>
      ))}
    </div>
  </div>
);

Recipe.propTypes = {
  recipeData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    book: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

// Export
export default Recipe;
