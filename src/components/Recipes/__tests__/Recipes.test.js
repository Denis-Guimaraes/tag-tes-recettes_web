// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import Recipes from 'src/components/Recipes';
import Recipe from 'src/components/Recipes/Recipe';

describe('Recipes', () => {
  let wrapper;
  const props = {
    getRecipes: jest.fn(),
    recipes: [{
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
    }],
    match: { path: '' },
  };
  it('render without crashing', () => {
    wrapper = shallow(<Recipes {...props} />);
  });
  it('getRecipes have been called on mount', () => {
    expect(props.getRecipes).toHaveBeenCalledTimes(1);
  });
  it('getRecipes have been called on update if match.path change', () => {
    wrapper.setProps({ match: { path: 'path' } });
    expect(props.getRecipes).toHaveBeenCalledTimes(2);
  });
  it('contain all components Recipe', () => {
    expect(wrapper.find(Recipe)).toHaveLength(1);
  });
});
