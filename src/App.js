import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <h1>App</h1>
        <BrowserRouter>
          <NavLink to="/gif/panda">Gifs de pandas</NavLink>
          <NavLink to="/gif/morty">Gifs de morty</NavLink>
          <NavLink to="/gif/spiderman">Gifs de spiderman</NavLink>
          <NavLink to="/gif/javascript">Gifs de javascript</NavLink>
          <Routes>
            <Route
              path="/gif/:keyword"
              element={<ListOfGifs></ListOfGifs>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
