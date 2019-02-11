// Initial state
const initialState = {
  books: [],
};

// Action type
const STORE_BOOKS = 'STORE_BOOKS';

// Reducer
const BookReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STORE_BOOKS:
      return {
        ...state,
        books: [...action.books],
      };
    default:
      return state;
  }
};

// Action creator
export const storeBooks = books => ({
  type: STORE_BOOKS,
  books,
});

// Export
export default BookReducer;
