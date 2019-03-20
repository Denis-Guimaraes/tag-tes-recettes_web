// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import Modal from 'src/components/Modal';

describe('Modal', () => {
  let wrapper;
  const props = {
    userMessage: ['message 1', 'message 2'],
    closeModal: jest.fn(),
  };
  it('render without crashing', () => {
    wrapper = shallow(<Modal {...props} />);
  });
  it('contain all messages', () => {
    expect(wrapper.find('.modal__message')).toHaveLength(props.userMessage.length);
  });
  it('on click closeModal have been called', () => {
    wrapper.find('.modal__button').simulate('click');
    expect(props.closeModal).toHaveBeenCalled();
  });
});
