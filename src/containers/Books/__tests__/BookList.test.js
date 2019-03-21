// Local import
import { filterBooks } from 'src/containers/Books/BookList';

describe('BookList containers', () => {
  it('return books filtered by type', () => {
    const books = [
      { name: 'name 1', type: 1 },
      { name: 'name 2', type: 2 },
      { name: 'name 3', type: 1 },
      { name: 'name 4', type: 2 },
    ];
    filterBooks(books).forEach((book) => {
      expect(book.type).toEqual(1);
    });
  });
});
