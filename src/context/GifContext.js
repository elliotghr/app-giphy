import React, { createContext, useState } from "react";

const GifContext = createContext({});

const GifProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);

  return (
    <GifContext.Provider value={{ gifs, setGifs }}>
      {children}
    </GifContext.Provider>
  );
};

export { GifProvider };
export default GifContext;
