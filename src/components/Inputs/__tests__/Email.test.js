// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import Email from 'src/components/Inputs/Email';

describe('Email', () => {
  let wrapper;
  const props = {
    email: '',
    inputId: 'id',
    onChange: jest.fn(),
  };
  it('render without crashing', () => {
    wrapper = shallow(<Email {...props} />);
  });
  it('input id = props.inputId', () => {
    expect(wrapper.find('input').prop('id')).toEqual(props.inputId);
  });
  it('input value = props.email', () => {
    expect(wrapper.find('input').prop('value')).toEqual(props.email);
  });
  it('email empty, input has class input__text', () => {
    expect(wrapper.find('input').hasClass('input__text')).toBe(true);
  });
  it('email don\'t contain @, input has class input__text--bad', () => {
    wrapper.setProps({ email: 'email' });
    expect(wrapper.find('input').hasClass('input__text--bad')).toBe(true);
  });
  it('email contain @, input has class input__text--good', () => {
    wrapper.setProps({ email: 'email@' });
    expect(wrapper.find('input').hasClass('input__text--good')).toBe(true);
  });
  it('on change input value, call props.onChange ', () => {
    const evt = { target: { name: 'email', value: 'email' } };
    wrapper.find('input').simulate('change', evt);
    expect(props.onChange).toHaveBeenCalled();
  });
});
