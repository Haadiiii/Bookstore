import React from "react";
import "./booklist.css";

const Form = () => (
  <div>
    <input type="title" placeholder="title" />
    <input type="author" placeholder="author" />
    <button type="submit">Add Book</button>
  </div>
);

export default Form;
