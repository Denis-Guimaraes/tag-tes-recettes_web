// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import Password from 'src/components/Inputs/Password';

describe('Password', () => {
  let wrapper;
  const props = {
    password: '',
    inputId: 'id',
    onChange: jest.fn(),
  };
  it('render without crashing', () => {
    wrapper = shallow(<Password {...props} />);
  });
  it('input id = props.inputId', () => {
    expect(wrapper.find('input').prop('id')).toEqual(props.inputId);
  });
  it('input value = props.password', () => {
    expect(wrapper.find('input').prop('value')).toEqual(props.password);
  });
  it('password empty, input has class input__text', () => {
    expect(wrapper.find('input').hasClass('input__text')).toBe(true);
  });
  it('password length < 6, input has class input__text--bad', () => {
    wrapper.setProps({ password: 'pass' });
    expect(wrapper.find('input').hasClass('input__text--bad')).toBe(true);
  });
  it('password length >= 6, input has class input__text--good', () => {
    wrapper.setProps({ password: 'password' });
    expect(wrapper.find('input').hasClass('input__text--good')).toBe(true);
  });
  it('on change input value, call props.onChange ', () => {
    const evt = { target: { name: 'password', value: 'password' } };
    wrapper.find('input').simulate('change', evt);
    expect(props.onChange).toHaveBeenCalled();
  });
});
