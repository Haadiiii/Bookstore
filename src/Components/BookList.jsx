import React from "react";
import Book from "./Book";
import Form from "./Form";

import "./booklist.css";

const Booklist = () => (
  <div className="book">
    <button type="button">Remove</button>
    <div>
      <Book title="title" />
      <Book title="author" />
    </div>
    <div>
      <Form />
    </div>
  </div>
);
export default Booklist;
