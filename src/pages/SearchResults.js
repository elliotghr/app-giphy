import React from "react";
import { useParams } from "react-router-dom";
import ListOfGifs from "../components/ListOfGifs";
import Spinner from "../components/Spinner";
import useGifs from "../hooks/useGifs";

const SearchResults = () => {
  let { keyword } = useParams();
  const { loading, gifs } = useGifs(keyword);
  return (
    <>{loading ? <Spinner></Spinner> : <ListOfGifs gifs={gifs}></ListOfGifs>}</>
  );
};

export default SearchResults;
