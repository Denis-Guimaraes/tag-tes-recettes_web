// NPM import
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
// Local import
import LinkSignin from 'src/components/Nav/LinkSignin';

describe('LinkSignin', () => {
  let wrapper;
  it('render without crashing', () => {
    wrapper = shallow(<LinkSignin />);
  });
  it('contain component Link', () => {
    expect(wrapper.exists(Link)).toBe(true);
  });
});
