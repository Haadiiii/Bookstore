import React from "react";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/books";

const Book = (props) => {
  const dispatch = useDispatch();
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
      <button type="button" onClick={() => dispatch(removeBook(props.id))}>
        Remove
      </button>
    </div>
  );
};

export default Book;
