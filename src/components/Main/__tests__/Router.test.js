// NPM import
import React from 'react';
import { shallow } from 'enzyme';
import { Switch } from 'react-router-dom';
// Local import
import Router from 'src/components/Main/Router';
import Modal from 'src/containers/Modal';

describe('Router', () => {
  let wrapper;
  const props = { userMessage: [] };
  it('render without crashing', () => {
    wrapper = shallow(<Router {...props} />);
  });
  it('contain component Switch', () => {
    expect(wrapper.exists(Switch)).toBe(true);
  });
  it('userMessage.length = 0 don\'t contain component Modal', () => {
    expect(wrapper.exists(Modal)).toBe(false);
  });
  it('userMessage.length > 0 contain component Modal', () => {
    wrapper.setProps({ userMessage: ['message'] });
    expect(wrapper.exists(Modal)).toBe(true);
  });
});
