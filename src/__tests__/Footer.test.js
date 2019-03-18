/* eslint-disable no-undef */
// NPM import
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// Local import
import Footer from '../components/Footer';


describe('Footer', () => {
  it('match snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
