import { useEffect, useState } from "react";
import getSingleGif from "../services/getSingleGif";
import useGobalGif from "./useGlobalGifs";
// Creamos este hook externo para adaptar de donde se recuperará el gif seleccionado
const useSingleGif = ({ keyGif }) => {
  const gifs = useGobalGif();
  const gifFromCache = gifs.find((el) => el.id === keyGif);

  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);
      getSingleGif({ keyGif })
        .then((res) => {
          setGif(res);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [gif, keyGif]);

  return { gif, isLoading, isError };
};

export default useSingleGif;
