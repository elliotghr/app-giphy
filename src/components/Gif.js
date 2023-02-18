import React from "react";
import { Link } from "react-router-dom";
import "./Gif.css";

const Gif = ({ title, id, url }) => {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img src={url} alt={title}></img>
      </Link>
    </div>
  );
};

export default Gif;
