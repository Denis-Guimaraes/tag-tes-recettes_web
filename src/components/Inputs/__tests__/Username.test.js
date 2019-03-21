// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import Username from 'src/components/Inputs/Username';

describe('Username', () => {
  let wrapper;
  const props = {
    username: '',
    inputId: 'id',
    onChange: jest.fn(),
  };
  it('render without crashing', () => {
    wrapper = shallow(<Username {...props} />);
  });
  it('input id = props.inputId', () => {
    expect(wrapper.find('input').prop('id')).toEqual(props.inputId);
  });
  it('input value = props.username', () => {
    expect(wrapper.find('input').prop('value')).toEqual(props.username);
  });
  it('username empty, input has class input__text', () => {
    expect(wrapper.find('input').hasClass('input__text')).toBe(true);
  });
  it('username length < 2, input has class input__text--bad', () => {
    wrapper.setProps({ username: 'u' });
    expect(wrapper.find('input').hasClass('input__text--bad')).toBe(true);
  });
  it('username length >= 2, input has class input__text--good', () => {
    wrapper.setProps({ username: 'username' });
    expect(wrapper.find('input').hasClass('input__text--good')).toBe(true);
  });
  it('on change input value, call props.onChange ', () => {
    const evt = { target: { name: 'username', value: 'username' } };
    wrapper.find('input').simulate('change', evt);
    expect(props.onChange).toHaveBeenCalled();
  });
});
