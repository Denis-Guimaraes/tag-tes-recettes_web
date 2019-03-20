/* eslint-disable import/no-named-as-default */
// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import { NavConnected } from 'src/components/Nav/NavConnected';
import LinkMyBooks from 'src/components/Nav/LinkMyBooks';
import LinkMyFavorites from 'src/components/Nav/LinkMyFavorites';
import LinkAddRecipe from 'src/components/Nav/LinkAddRecipe';
import LinkSearchRecipes from 'src/components/Nav/LinkSearchRecipes';

describe('NavConnected', () => {
  let wrapper;
  it('render without crashing', () => {
    wrapper = shallow(<NavConnected />);
  });
  it('contain component LinkMyBooks', () => {
    expect(wrapper.exists(LinkMyBooks)).toBe(true);
  });
  it('contain component LinkMyFavorites', () => {
    expect(wrapper.exists(LinkMyFavorites)).toBe(true);
  });
  it('contain component LinkAddRecipe', () => {
    expect(wrapper.exists(LinkAddRecipe)).toBe(true);
  });
  it('contain component LinkSearchRecipes', () => {
    expect(wrapper.exists(LinkSearchRecipes)).toBe(true);
  });
});
