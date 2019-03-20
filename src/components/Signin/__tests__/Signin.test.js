// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import Signin from 'src/components/Signin';
import Email from 'src/containers/Inputs/Email';
import Password from 'src/containers/Inputs/Password';
import ErrorForm from 'src/components/ErrorForm';
import Loader from 'src/components/Loader';

describe('Signin', () => {
  let wrapper;
  const props = {
    location: { pathname: '' },
    email: '',
    password: '',
    submitSignin: jest.fn(),
    userMessage: [],
  };
  it('render without crashing', () => {
    wrapper = shallow(<Signin {...props} />);
  });
  it('contain component Email', () => {
    expect(wrapper.exists(Email)).toBe(true);
  });
  it('contain component Password', () => {
    expect(wrapper.exists(Password)).toBe(true);
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
  it('submit signin fail validation data', () => {
    wrapper.setProps({
      email: 'test',
      password: 'test',
      userMessage: [],
    });
    wrapper.find('.signin').simulate('submit', { preventDefault: () => {} });
    expect(wrapper.state('errorList')).toHaveLength(2);
  });
  it('submit signin sucess validation data', () => {
    wrapper.setProps({
      email: 'test@test.test',
      password: 'test111',
    });
    wrapper.setState({ errorList: [] });
    wrapper.find('.signin').simulate('submit', { preventDefault: () => {} });
    expect(wrapper.state('errorList')).toHaveLength(0);
    expect(wrapper.state('loading')).toBe(true);
    expect(wrapper.instance().props.submitSignin).toHaveBeenCalled();
  });
});
