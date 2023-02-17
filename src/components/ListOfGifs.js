import React, { useEffect, useState } from "react";
import getGifs from "../services/getGif";
import Gif from "./Gif";

const ListOfGifs = ({ keyword }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs(keyword).then((res) => setGifs(res));
  }, [keyword]);
  return gifs.map((el) => (
    <Gif key={el.id} title={el.title} id={el.id} url={el.url}></Gif>
  ));
};

export default ListOfGifs;
