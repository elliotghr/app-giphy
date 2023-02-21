import { useContext, useEffect, useState } from "react";
import GifContext from "../context/GifContext";
import getGifs from "../services/getGif";

const useGifs = (keyword = null) => {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifContext);
  // Se reliza la petición fetch con la keyword del parametro de la url
  useEffect(() => {
    setLoading(true);
    // Recuperamos la keyword del local storage
    const keywordToUse =
      keyword || localStorage.getItem("lastKeyword") || "random";
    getGifs(keywordToUse).then((res) => setGifs(res));
    // Guardamos la keyword en el local storage después de cada busqueda
    if (keyword) localStorage.setItem("lastKeyword", keyword);
    setLoading(false);
  }, [keyword, setGifs]);
  return { loading, gifs };
};

export default useGifs;
