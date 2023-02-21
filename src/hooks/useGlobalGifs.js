// Este es un customhook de lectura, es una buena practica tenerlo de esta manera en lugar de usr el contexto directamente en el componente

// https://kentcdodds.com/blog/how-to-use-react-context-effectively

import { useContext } from "react";
import GifContext from "../context/GifContext";

const useGobalGif = () => {
  const { gifs } = useContext(GifContext);
  return gifs;
};

export default useGobalGif;
