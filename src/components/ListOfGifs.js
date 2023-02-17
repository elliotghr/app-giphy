import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getGifs from "../services/getGif";
import Gif from "./Gif";

const ListOfGifs = () => {
  const [loading, setLoading] = useState(false);
  let { keyword } = useParams();
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs(keyword).then((res) => setGifs(res));
    setLoading(false);
  }, [keyword]);

  if (loading) return <i>Loading</i>;

  return gifs.map((el) => (
    <Gif key={el.id} title={el.title} id={el.id} url={el.url}></Gif>
  ));
};

export default ListOfGifs;
