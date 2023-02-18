import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <BrowserRouter>
          <NavLink to="/" className="logo-container">
            <img src="https://placeimg.com/200/200/animals" alt="Animals"></img>
          </NavLink>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/search/:keyword"
              element={<ListOfGifs></ListOfGifs>}
            ></Route>
            <Route path="/gif/:id" element={<Detail></Detail>}></Route>
          </Routes>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
