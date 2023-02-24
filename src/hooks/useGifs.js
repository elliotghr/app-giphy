import { useContext, useEffect, useState } from "react";
import GifContext from "../context/GifContext";
import getGifs from "../services/getGif";

const INITIAL_PAGE = 0;

const useGifs = (keyword = null) => {
  const { gifs, setGifs } = useContext(GifContext);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  
  // Recuperamos la keyword del local storage
  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";
  // Se reliza la petición fetch con la keyword del parametro de la url
  useEffect(() => {
    setLoading(true);
    getGifs(keywordToUse).then((res) => setGifs(res));
    // Guardamos la keyword en el local storage después de cada busqueda
    if (keyword) localStorage.setItem("lastKeyword", keyword);
    setLoading(false);
  }, [keyword, setGifs, keywordToUse]);

  // Efecto que se ejecutará cada que la página cambie
  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingNextPage(true);
    getGifs(keywordToUse, page).then((nextGifs) => {
      // A set gifs le pasamos en forma de función el estado anterior
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [page, keywordToUse, setGifs]);

  return { loading, loadingNextPage, gifs, setPage };
};

export default useGifs;
