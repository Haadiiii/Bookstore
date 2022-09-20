import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookReducer from "./books/books";
import categoryReducer from "./categories/categories";

const reducer = combineReducers({
  book: bookReducer,
  category: categoryReducer,
});

const store = configureStore({
  reducer,
});

console.log(store.getState());
export default store;
