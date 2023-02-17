import React from "react";
import { useParams } from "react-router-dom";

const SingleGif = () => {
  let params = useParams();
  console.log(params);
  return <div>SingleGif</div>;
};

export default SingleGif;
