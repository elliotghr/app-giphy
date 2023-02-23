import React, { useEffect, useState } from "react";
import useNearScreen from "../hooks/useNearScreen";
import getTrendingSearchTerms from "../services/getTrendingSearchTerms";
import Category from "./Category";

const TrendigSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingSearchTerms().then(setTrends);
  }, []);

  return <Category title={"Tendencias"} data={trends}></Category>;
};

// Componente que determinará si se muestra el componente de trending o no
export default function LazyTrending() {
  const { isNearScreen, lazyElement } = useNearScreen();

  return (
    <div ref={lazyElement}>
      {isNearScreen ? <TrendigSearches></TrendigSearches> : null}
    </div>
  );
}
