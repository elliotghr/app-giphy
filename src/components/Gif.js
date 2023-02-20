import React from "react";
import { Link } from "react-router-dom";
import "./ListOfGifs.css";

const Gif = ({ title, id, url }) => {
  return (
    <div className="ListOfGifs-item">
      <Link to={`/gif/${id}`} className="Gif-link">
        {/* <h4>{title}</h4> */}
        <img src={url} alt={title}></img>
      </Link>
    </div>
  );
};

export default Gif;
