import React, { useEffect, useState } from "react";
import getTrendingSearchTerms from "../services/getTrendingSearchTerms";
import Category from "./Category";

const TrendigSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingSearchTerms().then(setTrends);
  }, []);

  return <Category title={"Tendencias"} data={trends}></Category>;
};

export default TrendigSearches;
