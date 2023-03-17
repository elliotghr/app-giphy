import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Gif from "../components/Gif";
import Spinner from "../components/Spinner";
import useSingleGif from "../hooks/useSingleGif";
// import useSEO from "../hooks/useSEO";
import { Helmet } from "react-helmet";

const Detail = () => {
  const { id: keyGif } = useParams();
  const navigate = useNavigate();
  const { gif, isLoading, isError } = useSingleGif({ keyGif });
  const title = gif ? `${gif.title} || Giffy` : "";
  // useSEO({ title, description: `Detail of ${title}` });

  if (isLoading)
    return (
      <>
        {/* Se trae helmet y traemos las etiquetas de metadatos que queremos modificar */}
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner></Spinner>
      </>
    );
  if (isError) return navigate("/404");
  if (!gif) return;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h2>{gif.title}</h2>
      <Gif title={gif.title} id={gif.id} url={gif.url}></Gif>
    </div>
  );
};

export default Detail;
