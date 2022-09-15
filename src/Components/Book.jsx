import React from "react";

const Book = ({ title, author, button }) => (
  <div>
    <div>{title}</div>
    <div>{author}</div>
    <button type="button">{button}</button>
  </div>
);

export default Book;
