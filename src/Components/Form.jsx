import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../redux/books/books";
import "./booklist.css";
import uuid4 from "react-uuid";
import { useState } from "react";

const Form = () => {
  const dispatch = useDispatch();
  const [values, setValue] = useState({
    title: "",
    author: "",
  });

  const changeHandler = (e) => {
    const [name, value] = e.target;
    setValue((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
  };

  return (
    <div>
      <form type="submit" onSubmit={clickHandler}>
        <input
          type="title"
          name={values.title}
          placeholder="title"
          onChange={changeHandler}
        />{" "}
        <input
          type="author"
          name={values.author}
          placeholder="author"
          onChange={changeHandler}
        />{" "}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
