/* eslint-disable no-undef */
// NPM import
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
// Local import
import { LinkMyBooks } from 'src/components/Nav/LinkMyBooks';

describe('NavConnected', () => {
  let wrapper;
  const props = { location: { pathname: '/mes-livres' } };
  it('render without crashing', () => {
    wrapper = shallow(<LinkMyBooks {...props} />);
  });
  it('contain component Link', () => {
    expect(wrapper.exists(Link)).toBe(true);
  });
  it('route /mes-livres component has class nav-item__icon--current', () => {
    expect(wrapper.find('.nav-item__icon').hasClass('nav-item__icon--current')).toBe(true);
  });
  it('other route component dont has class nav-item__icon--current', () => {
    props.location.pathname = '/ajouter';
    wrapper = shallow(<LinkMyBooks {...props} />);
    expect(wrapper.find('.nav-item__icon').hasClass('nav-item__icon--current')).toBe(false);
  });
});
