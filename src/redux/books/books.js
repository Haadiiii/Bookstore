const ADD = "books/books/ADD";
const REMOVE = "books/books/REMOVE";
const bookArray = [];

export const addBook = (book) => (dispatch) => {
  dispatch({
    type: ADD,
    payload: book,
  });
};

export const removeBook = (book) => (dispatch) => {
  dispatch({
    type: REMOVE,
    payload: book,
  });
};

const bookReducer = (state = bookArray, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        state: action.payload,
      };
    case REMOVE:
      return {
        ...state.filter((book) => book.id === action.id),
      };
    default:
      return state;
  }
};

export default bookReducer;
