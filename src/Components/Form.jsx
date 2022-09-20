import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { addBook } from "../redux/books/books";
import "./booklist.css";

const Form = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    id: uuid(),
    title: "",
    author: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const clickHandler = (e) => {
    e.preventDefault();
    setValues({ id: uuid(), title: "", author: "" });
    dispatch(addBook(values));
  };

  return (
    <div>
      <form type="submit" onSubmit={clickHandler}>
        <input
          type="title"
          value={values.title}
          name="title"
          placeholder="title"
          onChange={changeHandler}
        />
        {" "}
        <input
          type="author"
          value={values.author}
          name="author"
          placeholder="author"
          onChange={changeHandler}
        />
        {" "}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
