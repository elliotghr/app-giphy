import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <BrowserRouter>
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
