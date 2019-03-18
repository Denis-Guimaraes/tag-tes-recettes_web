/* eslint-disable no-undef */
// NPM import
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// Local import
import App from '../components/App';
import Header from '../components/Header';
import Nav from '../containers/Nav';
import Main from '../containers/Main';
import Footer from '../components/Footer';

describe('App', () => {
  it('match snapshot', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('contain component Header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(Header)).toBe(true);
  });
  it('contain component Nav', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(Nav)).toBe(true);
  });
  it('contain component Main', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(Main)).toBe(true);
  });
  it('contain Footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(Footer)).toBe(true);
  });
});
