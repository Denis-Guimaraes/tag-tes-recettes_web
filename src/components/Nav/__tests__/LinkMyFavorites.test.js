/* eslint-disable no-undef */
// NPM import
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
// Local import
import { LinkMyFavorites } from 'src/components/Nav/LinkMyFavorites';

describe('NavConnected', () => {
  let wrapper;
  const props = { location: { pathname: '/mes-favorites' } };
  it('render without crashing', () => {
    wrapper = shallow(<LinkMyFavorites {...props} />);
  });
  it('contain component Link', () => {
    expect(wrapper.exists(Link)).toBe(true);
  });
  it('route /mes-favorites component has class nav-item__icon--current', () => {
    expect(wrapper.find('.nav-item__icon').hasClass('nav-item__icon--current')).toBe(true);
  });
  it('other route component dont has class nav-item__icon--current', () => {
    props.location.pathname = '/ajouter';
    wrapper = shallow(<LinkMyFavorites {...props} />);
    expect(wrapper.find('.nav-item__icon').hasClass('nav-item__icon--current')).toBe(false);
  });
});
