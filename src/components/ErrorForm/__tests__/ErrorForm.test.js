// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import ErrorForm from 'src/components/ErrorForm';

describe('ErrorForm', () => {
  let wrapper;
  const props = { error: 'error' };
  it('render without crashing', () => {
    wrapper = shallow(<ErrorForm {...props} />);
  });
  it('contain error message', () => {
    expect(wrapper.text()).toEqual(props.error);
  });
});
