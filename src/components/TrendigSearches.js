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

// Componente que determinará si se muestra el componente de trending o no
export default function LazyTrending() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const options = {
      rootMargin: "100px",
    };
    const onChange = (entries) => {
      const el = entries[0];
      if (el.isIntersecting) setShow(true);
    };
    const observer = new IntersectionObserver(onChange, options);
    observer.observe(document.getElementById("LazyTrending"));
  }, []);

  return (
    <div id="LazyTrending">
      {show ? <TrendigSearches></TrendigSearches> : null}
    </div>
  );
}
