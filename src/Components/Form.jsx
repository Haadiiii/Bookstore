import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { addBook } from "../redux/books/books";
import "../assets/Styles/form.css";

const Form = () => {
  const [msg, setMsg] = useState("");

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
      title: "",
      author: "",
      category: "",
      button: "Adding...",
    });
    setTimeout(() => setValues({ button: "Add BOOK" }), 1500);
    setMsg("Book Added Successfully");
    setTimeout(() => setMsg(""), 3000);
  };

  return (
    <div>
      <hr className="line" />
      <h1 className="new-book">ADD NEW BOOK</h1>
      <form id="form" type="submit" onSubmit={clickHandler}>
        <input
          required
          type="title"
          value={values.title}
          name="title"
          placeholder="title"
          id="input-1"
          onChange={changeHandler}
        />
        {" "}
        <input
          required
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
        <button className="btn" type="submit">
          {values.button}
        </button>
      </form>
      <p className="added-msg">{msg}</p>
    </div>
  );
};

export default Form;
