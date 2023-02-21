import React from "react";
import Gif from "./Gif";

const ListOfGifs = ({ gifs }) => {
  return (
    <div className="ListOfGifs">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} id={id} url={url}></Gif>
      ))}
    </div>
  );
};

export default ListOfGifs;
