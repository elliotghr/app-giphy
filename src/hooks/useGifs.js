import { useEffect, useState } from "react";
import getGifs from "../services/getGif";

const useGifs = (keyword) => {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  // Se reliza la petición fetch con la keyword del parametro de la url
  useEffect(() => {
    setLoading(true);
    getGifs(keyword).then((res) => setGifs(res));
    setLoading(false);
  }, [keyword]);
  return { loading, gifs };
};

export default useGifs;
