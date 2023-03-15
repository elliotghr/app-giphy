import React from "react";
import Gif from "./Gif";

const ListOfGifs = ({ gifs }) => {
  return (
    <div className="ListOfGifs">
      {gifs.map(({ id, title, url, ...rest }) => (
        <Gif key={id} title={title} id={id} url={url} restOfGifs={rest}></Gif>
      ))}
    </div>
  );
};

export default ListOfGifs;
