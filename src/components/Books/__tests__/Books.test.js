// NPM import
import React from 'react';
import { shallow } from 'enzyme';
// Local import
import Books from 'src/components/Books';
import BookList from 'src/containers/Books/BookList';
import MagazineList from 'src/containers/Books/MagazineList';

describe('Books', () => {
  let wrapper;
  const props = {
    getAllBooks: jest.fn(),
  };
  it('render without crashing', () => {
    wrapper = shallow(<Books {...props} />);
  });
  it('getAllBooks have been called one time', () => {
    expect(props.getAllBooks).toHaveBeenCalledTimes(1);
  });
  it('contain component BookList', () => {
    expect(wrapper.exists(BookList)).toBe(true);
  });
  it('contain component MagazineList', () => {
    expect(wrapper.exists(MagazineList)).toBe(true);
  });
  it('change tab to magazine tab on click', () => {
    wrapper.setState({ bookTab: true, magazineTab: false });
    wrapper.find('.books-tabs__tab').at(1).simulate('click');
    expect(wrapper.state(['bookTab'])).toBe(false);
    expect(wrapper.state(['magazineTab'])).toBe(true);
    expect(wrapper.find('.books-tabs__tab').at(1).hasClass('books-tabs__tab--active')).toBe(true);
    expect(wrapper.find('.books-tabs__tab').at(0).hasClass('books-tabs__tab--active')).toBe(false);
    expect(wrapper.find(BookList).prop('divClass')).toEqual('book-list');
    expect(wrapper.find(MagazineList).prop('divClass')).toEqual('book-list book-list--active');
  });
  it('change tab to book tab on click', () => {
    wrapper.find('.books-tabs__tab').at(1).simulate('click');
    expect(wrapper.state(['bookTab'])).toBe(true);
    expect(wrapper.state(['magazineTab'])).toBe(false);
    expect(wrapper.find('.books-tabs__tab').at(1).hasClass('books-tabs__tab--active')).toBe(false);
    expect(wrapper.find('.books-tabs__tab').at(0).hasClass('books-tabs__tab--active')).toBe(true);
    expect(wrapper.find(BookList).prop('divClass')).toEqual('book-list book-list--active');
    expect(wrapper.find(MagazineList).prop('divClass')).toEqual('book-list');
  });
});
