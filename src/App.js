import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import Error404 from "./components/Error404";
import staticContext from "./context/StaticContext";
import { GifProvider } from "./context/GifContext";

function App() {
  return (
    // Todo lo que esté envuelto en el staticContext.Provider tendrá acceso a los valores de nuestro contexto
    // <staticContext.Provider
    //   value={{
    //     name: "esto es con provider",
    //     suscribete: true,
    //   }}
    // >
    <div className="App">
      <section className="App-header">
        <BrowserRouter>
          <NavLink to="/" className="logo-container">
            <img src="https://placeimg.com/200/200/animals" alt="Animals"></img>
          </NavLink>
          <GifProvider>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route
                path="/search/:keyword"
                element={<SearchResults></SearchResults>}
              ></Route>
              <Route path="/gif/:id" element={<Detail></Detail>}></Route>
              <Route path="*" element={<Error404></Error404>}></Route>
            </Routes>
          </GifProvider>
        </BrowserRouter>
      </section>
    </div>
    // </staticContext.Provider>
  );
}

export default App;
