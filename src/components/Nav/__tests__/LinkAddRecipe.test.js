// NPM import
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
// Local import
import { LinkAddRecipe } from 'src/components/Nav/LinkAddRecipe';

describe('LinkAddRecipe', () => {
  let wrapper;
  const props = { location: { pathname: '/ajouter' } };
  it('render without crashing', () => {
    wrapper = shallow(<LinkAddRecipe {...props} />);
  });
  it('contain component Link', () => {
    expect(wrapper.exists(Link)).toBe(true);
  });
  it('route /ajouter component has class nav-item__icon--current', () => {
    expect(wrapper.find('.nav-item__icon').hasClass('nav-item__icon--current')).toBe(true);
  });
  it('other route component dont has class nav-item__icon--current', () => {
    wrapper.setProps({ location: { pathname: '/mes-livres' } });
    expect(wrapper.find('.nav-item__icon').hasClass('nav-item__icon--current')).toBe(false);
  });
});
