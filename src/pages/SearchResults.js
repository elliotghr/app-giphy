import React, { useCallback, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ListOfGifs from "../components/ListOfGifs";
import Spinner from "../components/Spinner";
import useGifs from "../hooks/useGifs";
import useNearScreen from "../hooks/useNearScreen";
// import debounce from "just-debounce-it";

const SearchResults = () => {
  let { keyword } = useParams();
  const { loading, gifs, setPage } = useGifs(keyword);
  const { isNearScreen, lazyElement } = useNearScreen("10px", false);
  // const debounceHandleNextPage = useRef();

  const handleNextPage = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, [setPage]);
  // const handleNextPage = (e) => {
  //   console.log("next page");
  // };

  // const debounceHandleNextPage = useCallback(
  //   debounce(() => console.log("next page"), 1000),
  //   []
  // );

  useEffect(() => {
    // if (isNearScreen) debounceHandleNextPage();
    if (isNearScreen) handleNextPage();
  }, [isNearScreen, handleNextPage]);

  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <h3>{keyword}</h3>
          <ListOfGifs gifs={gifs}></ListOfGifs>
          {/* Creamos un punto de referencia para detectar el final y hacer el scroll infinito */}
          <div id="visor" ref={lazyElement}></div>
          <button onClick={handleNextPage}>Get next page</button>
        </>
      )}
    </>
  );
};

export default SearchResults;
