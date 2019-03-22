// Local import
import BookReducer, { STORE_BOOKS, storeBooks } from 'src/store/reducers/BookReducer';

describe('BookReducer', () => {
  const initialState = { books: [] };
  const books = [{ name: 'name' }];
  it('reducer should return initial state', () => {
    expect(BookReducer(undefined, {})).toEqual(initialState);
  });
  it('action storeBooks return good object', () => {
    const expectAction = { type: STORE_BOOKS, books };
    expect(storeBooks(books)).toEqual(expectAction);
  });
  it('reducer should return new state with books', () => {
    expect(BookReducer(initialState, storeBooks(books))).toEqual({ books });
  });
});
