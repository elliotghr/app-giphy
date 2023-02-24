import { useEffect, useRef, useState } from "react";

export default function useNearScreen(distance = "100px", once = true) {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const lazyElement = useRef();

  useEffect(() => {
    const options = {
      rootMargin: distance,
    };
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setIsNearScreen(true);
        // Para dejar de observar un solo elemento si tenemos varios a ovservar
        // observer.unobserve(el);
        // Desonectamnos el observer para que no se esté renderizando multiples veces después de la primera vez
        once && observer.disconnect();
      } else {
        // Cuando no intersecte lo pasamos a false para poder detectar de nuevo cuando re intersecte
        !once && setIsNearScreen(false);
      }
    };
    const observer = new IntersectionObserver(onChange, options);
    observer.observe(lazyElement.current);

    // return () => observer.disconnect();
  }, [lazyElement, distance, once]);
  return { isNearScreen, lazyElement };
}
