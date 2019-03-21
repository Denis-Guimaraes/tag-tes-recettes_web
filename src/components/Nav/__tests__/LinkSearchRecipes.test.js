// NPM import
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
// Local import
import { LinkSearchRecipes } from 'src/components/Nav/LinkSearchRecipes';

describe('LinkSearchRecipes', () => {
  let wrapper;
  const props = { location: { pathname: '/rechercher' } };
  it('render without crashing', () => {
    wrapper = shallow(<LinkSearchRecipes {...props} />);
  });
  it('contain component Link', () => {
    expect(wrapper.exists(Link)).toBe(true);
  });
  it('route /rechercher component has class nav-item__icon--current', () => {
    expect(wrapper.find('.nav-item__icon').hasClass('nav-item__icon--current')).toBe(true);
  });
  it('other route component dont has class nav-item__icon--current', () => {
    wrapper.setProps({ location: { pathname: '/ajouter' } });
    expect(wrapper.find('.nav-item__icon').hasClass('nav-item__icon--current')).toBe(false);
  });
});
