/* eslint-disable no-undef */
// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import Footer from 'src/components/Footer';


describe('Footer', () => {
  it('render without crashing', () => {
    shallow(<Footer />);
  });
});
