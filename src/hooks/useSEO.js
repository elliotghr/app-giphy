import { useEffect, useRef } from "react";

const useTitle = ({ title, description }) => {
  const prevTitle = useRef(document.title);
  const prevDescription = useRef(
    document.querySelector('meta[name="description"').getAttribute("content")
  );
  console.log(prevDescription);
  // Controlamos el title con el useEffects
  useEffect(() => {
    const previousTitle = prevTitle.current;
    if (title) {
      document.title = `${title} | Giffy`;
    }
    return () => (document.title = previousTitle);
  }, [title]);

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"');
    const previousDescription = prevDescription.current;
    if (description) {
      metaDescription.setAttribute("content", description);
    }

    return () => {
      console.log("EFECTO TITLE");
      metaDescription.setAttribute("content", previousDescription);
    };
  }, [description]);
};

export default useTitle;
