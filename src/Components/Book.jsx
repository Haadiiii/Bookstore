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

      <p>
        author :
        {props.author}
      </p>
      <h4>
        title :
        {props.title}
      </h4>
      <p>
        category :
        {props.category}
      </p>
      <button type="button" onClick={removeBookFromStor}>
        Remove
      </button>
    </div>
  );
};

export default Book;
