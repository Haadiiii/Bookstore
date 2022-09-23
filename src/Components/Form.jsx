import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { addBook } from "../redux/books/books";
import "../assets/Styles/form.css";

const Form = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    title: "",
    author: "",
    category: "",
    button: "Add BOOK",
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
    const book = {
      item_id: uuid(),
      ...values,
    };
    dispatch(addBook(book));
    setValues({
      title: "", author: "", category: "", button: "Add BOOK",
    });
  };

  return (
    <div>
      <form id="form" type="submit" onSubmit={clickHandler}>
        <input
          type="title"
          value={values.title}
          name="title"
          placeholder="title"
          id="input-1"
          onChange={changeHandler}
        />
        {" "}
        <input
          type="author"
          value={values.author}
          name="author"
          placeholder="author"
          id="input-2"
          onChange={changeHandler}
        />
        {" "}
        <select
          type="category"
          name="category"
          placeholder="category"
          value={values.category}
          onChange={changeHandler}
          id="otherField"
        >
          <option>Select Category</option>
          <option>sports</option>
          <option>Fantasy</option>
          <option>Children&apos;s</option>
          <option>Literary Fiction</option>
          <option>Science Fiction</option>
        </select>
        {" "}
        <button
          className="btn"
          type="submit"
        >
          {values.button}
        </button>
      </form>
    </div>
  );
};

export default Form;
