import React, { useEffect, useState, useRef } from "react";
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
  const lazyElement = useRef();
  useEffect(() => {
    const options = {
      rootMargin: "100px",
    };
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        console.log(el);
        // Desonectamnos el observer para que no se esté renderizando multiples veces después de la primera vez
        observer.disconnect();
      }
    };
    const observer = new IntersectionObserver(onChange, options);
    observer.observe(lazyElement.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={lazyElement}>
      {show ? <TrendigSearches></TrendigSearches> : null}
    </div>
  );
}
