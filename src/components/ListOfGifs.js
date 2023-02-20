import React from "react";
import Gif from "./Gif";

const ListOfGifs = ({ gifs }) => {
  // return gifs.map((el) => (
  //   <Gif key={el.id} title={el.title} id={el.id} url={el.url}></Gif>
  // ));
  return (
    <div className="ListOfGifs">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} id={id} url={url}></Gif>
      ))}
    </div>
  );
};

export default ListOfGifs;
