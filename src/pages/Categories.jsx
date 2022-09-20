import React from "react";
import { useSelector } from "react-redux";

const Categories = () => {
  const catagories = useSelector((state) => state.category);
  return (
    <div className="cati">
      <button type="button">Check status</button>
      <div>{catagories.message}</div>
    </div>
  );
};

export default Categories;
