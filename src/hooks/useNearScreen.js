import { useEffect, useRef, useState } from "react";

export default function useNearScreen(distance = "100px") {
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
        observer.disconnect();
      }
    };
    const observer = new IntersectionObserver(onChange, options);
    observer.observe(lazyElement.current);

    return () => observer.disconnect();
  }, [lazyElement, distance]);
  return { isNearScreen, lazyElement };
}
