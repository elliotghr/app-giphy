import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getGifs from "../services/getGif";
import Gif from "./Gif";

const ListOfGifs = () => {
  //   const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState({ loading: false, results: [] });
  //  Guardamos un objeto en el estado del componente
  let { keyword } = useParams();

  useEffect(() => {
    setGifs((actualGifs) => ({ loading: true, results: actualGifs.results }));
    getGifs(keyword).then((res) =>
      setGifs({ loading: false, results: gifs.results })
    );
    setGifs({ loading: false, results: gifs.results });
  }, [keyword, gifs.results]);

  if (gifs.loading) return <i>Loading</i>;

  return gifs.results.map((el) => (
    <Gif key={el.id} title={el.title} id={el.id} url={el.url}></Gif>
  ));
};

export default ListOfGifs;
