// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import BookList from 'src/components/Books/BookList';
import Book from 'src/components/Books/Book';

describe('BookList', () => {
  let wrapper;
  const props = {
    divClass: 'class',
    books: [
      { id: 1, name: 'book 1' },
      { id: 2, name: 'book 2' },
    ],
  };
  it('render without crashing', () => {
    wrapper = shallow(<BookList {...props} />);
  });
  it('first div class = props.divClass', () => {
    expect(wrapper.find('div').at(0).hasClass(props.divClass)).toBe(true);
  });
  it('contain all components Book', () => {
    expect(wrapper.find(Book)).toHaveLength(props.books.length);
  });
});
