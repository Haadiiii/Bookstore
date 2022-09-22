import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import Form from "./Form";
import "./booklist.css";
import uuid from "react-uuid";
import { showBook } from "../redux/books/books";

const Booklist = () => {
  const dispatch = useDispatch();
  let { bookArray } = useSelector((state) => state.book);
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
