// NPM import
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileSignature } from 'react-icons/fa';
// Local import

// Styles
import './recipes.scss';

// Code

const Recipe = () => (
  <div className="recipe">
    <div className="recipe-wrapper">
      <div className="recipe-info">
        <span className="recipe-info__name">Recette: Nom d'une recette</span>
        <span className="recipe-info__book">Livre: Nom du livre</span>
        <span className="recipe-info__page"> Page: 122</span>
      </div>
      <Link to="/recettes/2/editer" className="recipe-edit">
        <FaFileSignature className="recipe-edit__icon" />Editer
      </Link>
    </div>
    <div className="recipe-tags">
      <span className="recipe-tags__tag">Chocolat</span>
      <span className="recipe-tags__tag">Tarte</span>
      <span className="recipe-tags__tag">tag 3</span>
      <span className="recipe-tags__tag">tag 4</span>
    </div>
  </div>
);

// Export
export default Recipe;
