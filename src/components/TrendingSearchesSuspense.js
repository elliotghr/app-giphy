import { useEffect, useState } from "react";
import getTrendingSearchTerms from "../services/getTrendingSearchTerms";
import Category from "./Category";

export default function TrendigSearchesSuspense() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingSearchTerms().then(setTrends);
  }, []);

  return <Category title={"Tendencias"} data={trends}></Category>;
}
