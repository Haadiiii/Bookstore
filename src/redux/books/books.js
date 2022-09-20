const ADD = "books/books/ADD";
const REMOVE = "books/books/REMOVE";
const initialState = {
  bookArray: [],
};

export const addBook = (book) => (dispatch) => {
  dispatch({
    type: ADD,
    payload: book,
  });
};

export const removeBook = (id) => (dispatch) => {
  dispatch({
    type: REMOVE,
    payload: id,
  });
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        bookArray: [...state.bookArray, action.payload],
      };
    case REMOVE:
      return {
        bookArray: state.bookArray.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export default bookReducer;
