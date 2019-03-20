// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import MagazineList from 'src/components/Books/MagazineList';
import Book from 'src/components/Books/Book';

describe('MagazineList', () => {
  let wrapper;
  const props = {
    divClass: 'class',
    books: [
      { id: 1, name: 'book 1' },
      { id: 2, name: 'book 2' },
    ],
  };
  it('render without crashing', () => {
    wrapper = shallow(<MagazineList {...props} />);
  });
  it('first div class = props.divClass', () => {
    expect(wrapper.find('div').at(0).hasClass(props.divClass)).toBe(true);
  });
  it('contain all components Book', () => {
    expect(wrapper.find(Book)).toHaveLength(props.books.length);
  });
});
