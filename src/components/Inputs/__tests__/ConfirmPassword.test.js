// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import ConfirmPassword from 'src/components/Inputs/ConfirmPassword';

describe('ConfirmPassword', () => {
  let wrapper;
  const props = {
    confirmPassword: '',
    inputId: 'id',
    onChange: jest.fn(),
  };
  it('render without crashing', () => {
    wrapper = shallow(<ConfirmPassword {...props} />);
  });
  it('input id = props.inputId', () => {
    expect(wrapper.find('input').prop('id')).toEqual(props.inputId);
  });
  it('input value = props.confirmPassword', () => {
    expect(wrapper.find('input').prop('value')).toEqual(props.confirmPassword);
  });
  it('confirmPassword empty, input has class input__text', () => {
    expect(wrapper.find('input').hasClass('input__text')).toBe(true);
  });
  it('confirmPassword length < 6, input has class input__text--bad', () => {
    wrapper.setProps({ confirmPassword: 'pass' });
    expect(wrapper.find('input').hasClass('input__text--bad')).toBe(true);
  });
  it('confirmPassword length >= 6, input has class input__text--good', () => {
    wrapper.setProps({ confirmPassword: 'password' });
    expect(wrapper.find('input').hasClass('input__text--good')).toBe(true);
  });
  it('on change input value, call props.onChange ', () => {
    const evt = { target: { name: 'confirmPassword', value: 'password' } };
    wrapper.find('input').simulate('change', evt);
    expect(props.onChange).toHaveBeenCalled();
  });
});
