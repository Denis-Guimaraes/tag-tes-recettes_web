// NPM import
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
// Local import
import Recipe from 'src/components/Recipes/Recipe';

describe('Recipes', () => {
  let wrapper;
  const props = {
    recipeData: {
      id: 1,
      name: 'name',
      page: 1,
      book: {
        name: 'name',
      },
      tags: [{
        id: 1,
        name: 'tag',
      }],
    },
  };
  it('render without crashing', () => {
    wrapper = shallow(<Recipe {...props} />);
  });
  it('contain component Link', () => {
    expect(wrapper.exists(Link)).toBe(true);
  });
  it('display all recipe info', () => {
    const texts = wrapper.find('span').map(node => node.text());
    expect(texts).toEqual([
      `Recette : ${props.recipeData.name}`,
      `Livre : ${props.recipeData.book.name}`,
      `Page : ${props.recipeData.page}`,
      props.recipeData.tags[0].name,
    ]);
  });
});
