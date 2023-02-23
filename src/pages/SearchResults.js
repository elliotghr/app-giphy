import React from "react";
import { useParams } from "react-router-dom";
import ListOfGifs from "../components/ListOfGifs";
import Spinner from "../components/Spinner";
import useGifs from "../hooks/useGifs";

const SearchResults = () => {
  let { keyword } = useParams();
  const { loading, gifs, setPage } = useGifs(keyword);
  const handleNextPage = (e) => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <h3>{keyword}</h3>
          <ListOfGifs gifs={gifs}></ListOfGifs>
          <button onClick={handleNextPage}>Get next page</button>
        </>
      )}
    </>
  );
};

export default SearchResults;
