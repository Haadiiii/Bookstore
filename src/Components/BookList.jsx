import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import Book from "./Book";
import Form from "./Form";

import "../assets/Styles/booklist.css";
import { showBook } from "../redux/books/books";

const Booklist = () => {
  const dispatch = useDispatch();
  const { bookArray } = useSelector((state) => state.book);
  useEffect(() => {
    dispatch(showBook());
  }, []);

  return (
    <div className="book">
      {bookArray.map((book) => (
        <Book
          key={uuid()}
          title={book.title}
          author={book.author}
          category={book.category}
          id={book.item_id}
        />
      ))}
      <div>
        <Form />
      </div>
    </div>
  );
};

export default Booklist;
