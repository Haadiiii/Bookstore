import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBook } from "../redux/books/books";
import uuid4 from "react-uuid";

const Book = () => {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.book);
  return (
    <div>
      <div key={uuid4()}>title: {book.name}</div>
      <div key={uuid4()}>author: {book.author}</div>
      <button type="button" onClick={() => dispatch(removeBook())}>
        Remove
      </button>
    </div>
  );
};

export default Book;
