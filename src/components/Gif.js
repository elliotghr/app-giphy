import React from "react";
import "./Gif.css";

const Gif = ({ title, id, url }) => {
  return (
    <a href={`#${id}`} className="Gif">
      <h4>{title}</h4>
      <small>{id}</small>
      <img src={url} alt={title}></img>
    </a>
  );
};

export default Gif;
