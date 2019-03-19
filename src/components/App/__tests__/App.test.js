/* eslint-disable no-undef */
// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import App from 'src/components/App';
import Header from 'src/components/Header';
import Nav from 'src/containers/Nav';
import Main from 'src/containers/Main';
import Footer from 'src/components/Footer';

describe('App', () => {
  let wrapper;
  it('render without crashing', () => {
    wrapper = shallow(<App />);
  });
  it('contain component Header', () => {
    expect(wrapper.exists(Header)).toBe(true);
  });
  it('contain component Nav', () => {
    expect(wrapper.exists(Nav)).toBe(true);
  });
  it('contain component Main', () => {
    expect(wrapper.exists(Main)).toBe(true);
  });
  it('contain Footer', () => {
    expect(wrapper.exists(Footer)).toBe(true);
  });
});
