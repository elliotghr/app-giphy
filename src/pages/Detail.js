import React from "react";
import { useParams } from "react-router-dom";
import Gif from "../components/Gif";
import useGobalGif from "../hooks/useGlobalGifs";

const Detail = () => {
  // Hcemos uso del contexto para poder utilizar la busqueda anterior en la pagina Detail
  const gifs = useGobalGif();
  const { id: keyGif } = useParams();
  if (gifs.length === 0) return;

  // Comparamos nuestro array de gifs con el id del gif a consumir
  const { id, title, url } = gifs.find((el) => el.id === keyGif);
  // renderizamos nuestro gif
  return (
    <div>
      <h2>{title}</h2>
      <Gif title={title} id={id} url={url}></Gif>
    </div>
  );
};

export default Detail;
