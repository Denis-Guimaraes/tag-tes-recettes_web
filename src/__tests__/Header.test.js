/* eslint-disable no-undef */
// NPM import
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Link } from 'react-router-dom';
// Local import
import Header from '../components/Header';


describe('Header', () => {
  it('match snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('contain component Link', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists(Link)).toBe(true);
  });
});
