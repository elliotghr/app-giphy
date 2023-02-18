import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getGifs from "../services/getGif";
import Gif from "./Gif";

const ListOfGifs = () => {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);
  let { keyword } = useParams();

  useEffect(() => {
    setLoading(true);
    getGifs(keyword).then((res) => setGifs(res));
    setLoading(false);
  }, [keyword]);

  return gifs.map((el) => (
    <Gif key={el.id} title={el.title} id={el.id} url={el.url}></Gif>
  ));
};

export default ListOfGifs;
