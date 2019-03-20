// NPM import
import React from 'react';
import { shallow } from 'enzyme';
import { Switch } from 'react-router-dom';
// Local import
import Main from 'src/components/Main';
import Router from 'src/containers/Main/Router';
import Modal from 'src/containers/Modal';

describe('Main', () => {
  let wrapper;
  const props = { userMessage: [], userToken: '' };
  it('render without crashing', () => {
    wrapper = shallow(<Main {...props} />);
  });
  it('userMessage.length = 0 don\'t contain component Modal', () => {
    expect(wrapper.exists(Modal)).toBe(false);
  });
  it('userMessage.length > 0 contain component Modal', () => {
    wrapper.setProps({ userMessage: ['message'] });
    expect(wrapper.exists(Modal)).toBe(true);
  });
  it('userToken.length = 0 contain component Switch', () => {
    expect(wrapper.exists(Switch)).toBe(true);
    expect(wrapper.exists(Router)).toBe(false);
  });
  it('userToken.length > 0 contain component Router', () => {
    wrapper.setProps({ userToken: 'token' });
    expect(wrapper.exists(Switch)).toBe(false);
    expect(wrapper.exists(Router)).toBe(true);
  });
});
