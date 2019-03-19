/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */
// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import Nav from '../index';
import NavDisconnected from '../NavDisconnected';
import NavConnected from '../NavConnected';

describe('Nav', () => {
  let wrapper;
  let props = { userToken: '' };
  it('render without crashing', () => {
    wrapper = shallow(<Nav {...props} />);
  });
  it('contain component NavDisconnected', () => {
    expect(wrapper.exists(NavConnected)).toBe(false);
    expect(wrapper.exists(NavDisconnected)).toBe(true);
  });
  it('contain component NavConnected', () => {
    props = { userToken: '111' };
    wrapper = shallow(<Nav {...props} />);
    expect(wrapper.exists(NavConnected)).toBe(true);
    expect(wrapper.exists(NavDisconnected)).toBe(false);
  });
});
