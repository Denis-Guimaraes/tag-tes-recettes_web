// NPM import
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
// Local import
import LinkHome from 'src/components/Nav/LinkHome';

describe('LinkHome', () => {
  let wrapper;
  it('render without crashing', () => {
    wrapper = shallow(<LinkHome />);
  });
  it('contain component Link', () => {
    expect(wrapper.exists(Link)).toBe(true);
  });
});
