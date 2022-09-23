import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/books";
import "../assets/Styles/books.css";

const Book = (props) => {
  const [values, setValues] = useState({ name: "remove" });
  const [num, setNum] = useState(0);

  const dispatch = useDispatch();
  const removeBookFromStor = () => {
    dispatch(removeBook(props.id));
    setValues({ name: "removing" });
  };

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(50, 100));
  };

  return (
    <div className="card">
      <div>
        <p className="category">{props.category}</p>
        <h1 className="title">{props.title}</h1>
        <p className="author">{props.author}</p>
        <div className="card-add">
          <p> comments</p>
          <hr />
          <p type="button" value={values.name} onClick={removeBookFromStor}>
            {values.name}
          </p>
          <hr />
          <p>Edit</p>
        </div>
      </div>
      <div className="completed">
        <div className="panel-bg">
          <hr />
        </div>
        <div className="completed-num">
          <h1>{num}%</h1>
          <p>Completed</p>
        </div>
        <hr className="line-2" />
        <div className="progress">
          <p>Current Chapter</p>
          <button onClick={handleClick}>update Progress</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
