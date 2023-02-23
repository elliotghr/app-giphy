import React from "react";
import useNearScreen from "../hooks/useNearScreen";
// Este es un import estatico, pero al separar la lógica de TrendingSearchesSuspense buscamos un import dinámico
// import TrendigSearchesSuspense from "./TrendingSearchesSuspense";

// Pasamos una función que devuelva el import dinamico del componente que queremos utilizar
const TrendingSearchesSuspense = React.lazy(() =>
  import("./TrendingSearchesSuspense")
);

// Componente que determinará si se muestra el componente de trending o no
export default function LazyTrending() {
  const { isNearScreen, lazyElement } = useNearScreen();

  return (
    <div ref={lazyElement}>
      {isNearScreen ? (
        <TrendingSearchesSuspense></TrendingSearchesSuspense>
      ) : null}
    </div>
  );
}
