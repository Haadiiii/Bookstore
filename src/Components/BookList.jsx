import React from "react";
import Book from "./Book";
import Form from "./Form";

import "./booklist.css";

const Booklist = () => (
  <div className="book">
    <Book />
    <div>
      <Form />
    </div>
  </div>
);
export default Booklist;
