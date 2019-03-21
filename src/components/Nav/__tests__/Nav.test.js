/* eslint-disable import/no-named-as-default */
// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import Nav from 'src/components/Nav/';
import NavDisconnected from 'src/components/Nav/NavDisconnected';
import NavConnected from 'src/components/Nav/NavConnected';

describe('Nav', () => {
  let wrapper;
  const props = { userToken: '' };
  it('render without crashing', () => {
    wrapper = shallow(<Nav {...props} />);
  });
  it('contain component NavDisconnected', () => {
    expect(wrapper.exists(NavConnected)).toBe(false);
    expect(wrapper.exists(NavDisconnected)).toBe(true);
  });
  it('contain component NavConnected', () => {
    wrapper.setProps({ userToken: 'token' });
    expect(wrapper.exists(NavConnected)).toBe(true);
    expect(wrapper.exists(NavDisconnected)).toBe(false);
  });
});
