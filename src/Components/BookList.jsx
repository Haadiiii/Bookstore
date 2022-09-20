import React from "react";
import { useSelector } from "react-redux";
import Book from "./Book";
import Form from "./Form";
import "./booklist.css";

const Booklist = () => {
  const { bookArray } = useSelector((state) => state.book);
  return (
    <div className="book">
      {bookArray.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}
      <div>
        <Form />
      </div>
    </div>
  );
};

export default Booklist;
