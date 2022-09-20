import React from "react";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/books";

const Book = (props) => {
  const dispatch = useDispatch();

  const removeBookFromStor = () => {
    dispatch(removeBook(props.id));
  };
  return (
    <div>
      <div>
        title:
        {props.title}
      </div>
      <div>
        author:
        {props.author}
      </div>
      <button type="button" onClick={removeBookFromStor}>
        Remove
      </button>
    </div>
  );
};

export default Book;
