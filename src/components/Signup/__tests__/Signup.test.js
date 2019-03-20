// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import Signup from 'src/components/Signup';
import Email from 'src/containers/Inputs/Email';
import Password from 'src/containers/Inputs/Password';
import ConfirmPassword from 'src/containers/Inputs/ConfirmPassword';
import ErrorForm from 'src/components/ErrorForm';
import Loader from 'src/components/Loader';

describe('Signup', () => {
  let wrapper;
  const props = {
    location: { pathname: '' },
    email: '',
    password: '',
    confirmPassword: '',
    submitSignup: jest.fn(),
    userMessage: [],
  };
  it('render without crashing', () => {
    wrapper = shallow(<Signup {...props} />);
  });
  it('contain component Email', () => {
    expect(wrapper.exists(Email)).toBe(true);
  });
  it('contain component Password', () => {
    expect(wrapper.exists(Password)).toBe(true);
  });
  it('contain component ConfirmPassword', () => {
    expect(wrapper.exists(ConfirmPassword)).toBe(true);
  });
  it('don\'t contain component ErrorForm when errorList.length = 0', () => {
    expect(wrapper.exists(ErrorForm)).toBe(false);
  });
  it('contain component ErrorForm when errorList.length > 0', () => {
    wrapper.setState({ errorList: ['error'] });
    expect(wrapper.exists(ErrorForm)).toBe(true);
  });
  it('don\'t contain component Loader when lloading = false', () => {
    expect(wrapper.exists(Loader)).toBe(false);
  });
  it('contain component Loader when loading = true', () => {
    wrapper.setState({ loading: true });
    expect(wrapper.exists(Loader)).toBe(true);
  });
  it('on update if loading = true set lodiang to false', () => {
    wrapper.setProps({ ...props, userMessage: ['message'] });
    wrapper.setState({ loading: true });
    wrapper.update();
    expect(wrapper.state('loading')).toBe(false);
  });
  it('submit signup fail validation data', () => {
    wrapper.setProps({
      email: 'test',
      password: 'test',
      confirmPassword: 'confirm',
      userMessage: [],
    });
    wrapper.find('.signup').simulate('submit', { preventDefault: () => {} });
    expect(wrapper.state('errorList')).toHaveLength(3);
  });
  it('submit signup sucess validation data', () => {
    wrapper.setProps({
      email: 'test@test.test',
      password: 'test111',
      confirmPassword: 'test111',
    });
    wrapper.setState({ errorList: [] });
    wrapper.find('.signup').simulate('submit', { preventDefault: () => {} });
    expect(wrapper.state('errorList')).toHaveLength(0);
    expect(wrapper.state('loading')).toBe(true);
    expect(wrapper.instance().props.submitSignup).toHaveBeenCalled();
  });
});
