// NPM import
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
// Local import
import Book from 'src/components/Books/Book';

describe('Book', () => {
  let wrapper;
  const props = {
    divClass: 'class',
    book: { id: 1, name: 'book 1' },
  };
  it('render without crashing', () => {
    wrapper = shallow(<Book {...props} />);
  });
  it('contain component Link', () => {
    expect(wrapper.exists(Link)).toBe(true);
  });
  it('contain book name', () => {
    expect(wrapper.find('.book__title').at(0).text()).toEqual(props.book.name);
  });
});
