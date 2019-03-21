// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import Resume from 'src/components/Home/Resume';

describe('Resume', () => {
  let wrapper;
  it('render without crashing', () => {
    wrapper = shallow(<Resume />);
  });
  it('contain component title h2', () => {
    expect(wrapper.exists('h2')).toBe(true);
  });
});
