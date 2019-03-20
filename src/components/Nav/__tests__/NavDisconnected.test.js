// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import { NavDisconnected } from 'src/components/Nav/NavDisconnected';
import LinkHome from 'src/components/Nav/LinkHome';
import LinkSignin from 'src/components/Nav/LinkSignin';
import LinkSignup from 'src/components/Nav/LinkSignup';

describe('NavDisconnected', () => {
  let wrapper;
  const props = { location: { pathname: '/' } };
  it('render without crashing', () => {
    wrapper = shallow(<NavDisconnected {...props} />);
  });
  it('route / contain component LinkSignin & LinkSignup', () => {
    expect(wrapper.exists(LinkHome)).toBe(false);
    expect(wrapper.exists(LinkSignin)).toBe(true);
    expect(wrapper.exists(LinkSignup)).toBe(true);
  });
  it('route /connexion contain component LinkHome & LinkSignup', () => {
    wrapper.setProps({ location: { pathname: '/connexion' } });
    expect(wrapper.exists(LinkHome)).toBe(true);
    expect(wrapper.exists(LinkSignin)).toBe(false);
    expect(wrapper.exists(LinkSignup)).toBe(true);
  });
  it('route /inscription contain component LinkHome & LinkSignin', () => {
    wrapper.setProps({ location: { pathname: '/inscription' } });
    expect(wrapper.exists(LinkHome)).toBe(true);
    expect(wrapper.exists(LinkSignin)).toBe(true);
    expect(wrapper.exists(LinkSignup)).toBe(false);
  });
});
