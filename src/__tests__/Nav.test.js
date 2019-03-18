/* eslint-disable no-undef */
// NPM import
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// Local import
import Nav from '../components/Nav';
import NavDisconnected from '../components/Nav/NavDisconnected';
import NavConnected from '../components/Nav/NavConnected';

describe('Nav', () => {
  it('match snapshot', () => {
    const props = {
      userToken: '',
    };
    const wrapper = shallow(<Nav {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('contain component NavDisconnected', () => {
    const props = {
      userToken: '',
    };
    const wrapper = shallow(<Nav {...props} />);
    expect(wrapper.exists(NavConnected)).toBe(false);
    expect(wrapper.exists(NavDisconnected)).toBe(true);
  });
  it('contain component NavConnected', () => {
    const props = {
      userToken: '111',
    };
    const wrapper = shallow(<Nav {...props} />);
    expect(wrapper.exists(NavConnected)).toBe(true);
    expect(wrapper.exists(NavDisconnected)).toBe(false);
  });
});
