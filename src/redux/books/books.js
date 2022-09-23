import { createAsyncThunk } from "@reduxjs/toolkit";

const ADD = "books/books/ADD";
const REMOVE = "books/books/REMOVE";
const SHOW_BOOK = "books/books/SOW_BOOK";

const url = "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/baNJ1Mz064XyqrmXZeu8/books/";
const initialState = {
  bookArray: [],
  msg: {},
};

export const showBook = createAsyncThunk(
  SHOW_BOOK,
  async (args, { dispatch }) => {
    const response = await fetch(url);
    const data = await response.json();
    const books = Object.keys(data).map((key) => {
      const book = data[key][0];
      return {
        item_id: key,
        ...book,
      };
    });
    dispatch({
      type: SHOW_BOOK,
      payload: books,
    });
    return books;
  },
);

export const addBook = (book) => async (dispatch) => {
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    dispatch({
      type: ADD,
    });
    dispatch(showBook());
  } catch (error) {
    console.log("error", error);
  }
};

export const removeBook = (id) => (dispatch) => {
  fetch(`${url}${id}`, {
    method: "DELETE",
  })
    .then(() => dispatch({
      type: REMOVE,
      payload: id,
    }))
    .then((data) => {
      console.log("removedata", data);
    });
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
      };
    case SHOW_BOOK:
      return {
        ...state,
        bookArray: action.payload,
      };
    case REMOVE:
      return {
        bookArray: state.bookArray.filter(
          (book) => book.item_id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default bookReducer;
