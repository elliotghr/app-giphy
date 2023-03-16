import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Gif from "../components/Gif";
import Spinner from "../components/Spinner";
import useSingleGif from "../hooks/useSingleGif";
import useTitle from "../hooks/useSEO";

const Detail = () => {
  const { id: keyGif } = useParams();
  const navigate = useNavigate();
  const { gif, isLoading, isError } = useSingleGif({ keyGif });
  const title = gif ? gif.title : "";
  useTitle({ title });

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return navigate("/404");
  if (!gif) return;

  return (
    <div>
      <h2>{gif.title}</h2>
      <Gif title={gif.title} id={gif.id} url={gif.url}></Gif>
    </div>
  );
};

export default Detail;
