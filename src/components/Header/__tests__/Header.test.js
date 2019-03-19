/* eslint-disable no-undef */
// NPM import
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
// Local import
import Header from 'src/components/Header';


describe('Header', () => {
  let wrapper;
  it('render without crashing', () => {
    wrapper = shallow(<Header />);
  });
  it('contain component Link', () => {
    expect(wrapper.exists(Link)).toBe(true);
  });
});
