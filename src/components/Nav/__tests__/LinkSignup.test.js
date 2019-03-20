// NPM import
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
// Local import
import LinkSignup from 'src/components/Nav/LinkSignup';

describe('LinkSignup', () => {
  let wrapper;
  it('render without crashing', () => {
    wrapper = shallow(<LinkSignup />);
  });
  it('contain component Link', () => {
    expect(wrapper.exists(Link)).toBe(true);
  });
});
