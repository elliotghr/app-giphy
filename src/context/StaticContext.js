import { createContext } from "react";

// Objeto mágico como valor inicial
// Este es un objeto estatico al que podremos acceder siempre y cuando no usemos el Provider

// const staticContext = createContext({
//   name: "esto es sin provider",
//   suscribete: true,
// });

// Este es creando un provider, el cual necesita la prop value para consumirlo
const staticContext = createContext();
export default staticContext;
