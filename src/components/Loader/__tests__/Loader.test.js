// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import Loader from 'src/components/Loader';

describe('Loader', () => {
  const props = { error: 'error' };
  it('render without crashing', () => {
    shallow(<Loader {...props} />);
  });
});
