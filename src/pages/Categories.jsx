import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkBook } from "../redux/categories/categories";

const Categories = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.category);
  return (
    <div className="cati">
      <button type="button" onClick={() => dispatch(checkBook())}>Check status</button>
      <div>{message}</div>
    </div>
  );
};

export default Categories;
