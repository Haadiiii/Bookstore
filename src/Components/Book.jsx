import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/books";
import "../assets/Styles/books.css";

const Book = (props) => {
  const [values, setValues] = useState("remove");
  const [num, setNum] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();
  const removeBookFromStor = () => {
    dispatch(removeBook(props.id));
    setValues("removing");
  };

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(
      randomNumberInRange(50, 100),
      setIsActive((current) => !current),
    );
  };

  return (
    <div>
      <div className="card">
        <div>
          <p className="category">{props.category}</p>
          <h1 className="title">{props.title}</h1>
          <p className="author">{props.author}</p>
          <div className="card-add">
            <p> comments</p>
            <hr />
            <button type="button" onClick={removeBookFromStor}>
              {values}
            </button>
            <hr />
            <p>Edit</p>
          </div>
        </div>
        <div className="completed">
          <div className="panel-bg">
            <hr
              style={{
                borderRight: isActive ? "10px solid #3498db" : "",
                borderBottom: isActive ? "10px solid #3498db" : "",
              }}
            />
          </div>
          <div className="completed-num">
            <h1>
              {num}
              %
            </h1>
            <p>Completed</p>
          </div>
          <hr className="line-2" />
          <div className="progress">
            <p>CURRENT CHAPTER</p>
            <button type="button" onClick={handleClick}>
              update Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
