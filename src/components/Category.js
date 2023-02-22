import React from "react";
import { NavLink } from "react-router-dom";

const Category = ({ title, data = [] }) => {
  return (
    <div>
      <h3>{title}</h3>
      {data.map((el) => (
        <li key={el}>
          <NavLink to={`/search/${el}`}>{el}</NavLink>
        </li>
      ))}
    </div>
  );
};

export default Category;
