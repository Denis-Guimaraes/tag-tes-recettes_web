// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import Home from 'src/components/Home';
import Resume from 'src/components/Home/Resume';
import Signin from 'src/containers/Signin';
import Signup from 'src/containers/Signup';

describe('Home', () => {
  let wrapper;
  it('render without crashing', () => {
    wrapper = shallow(<Home />);
  });
  it('contain component Resume', () => {
    expect(wrapper.exists(Resume)).toBe(true);
  });
  it('contain component Signin', () => {
    expect(wrapper.exists(Signin)).toBe(true);
  });
  it('contain component Signup', () => {
    expect(wrapper.exists(Signup)).toBe(true);
  });
});
