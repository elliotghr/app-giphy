import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListOfGifs from "../components/ListOfGifs";
import Spinner from "../components/Spinner";
import getGifs from "../services/getGif";

const SearchResults = () => {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);
  let { keyword } = useParams();

  // Se reliza la petición fetch con la keyword del parametro de la url
  useEffect(() => {
    setLoading(true);
    getGifs(keyword).then((res) => setGifs(res));
    setLoading(false);
  }, [keyword]);

  return (
    <>{loading ? <Spinner></Spinner> : <ListOfGifs gifs={gifs}></ListOfGifs>}</>
  );
};

export default SearchResults;
