import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./ListOfGifs.css";

const Gif = ({ title, id, url }) => {
  return (
    <div className="ListOfGifs-item">
      <Link to={`/gif/${id}`} className="Gif-link">
        <img src={url} alt={title}></img>
      </Link>
    </div>
  );
};

// Comparamos las prevProps y las nextProps, si el id de ambas es igual entonces lo memorizamos
export default memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
