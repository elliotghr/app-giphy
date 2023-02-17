import { useEffect, useState } from "react";
import "./App.css";
import getGifs from "./services/getGif";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword: "morty" }).then((res) => setGifs(res));
  }, []);

  return (
    <div className="App">
      <section className="App-header">
        {gifs.map((el) => (
          <img src={el.url} alt="giphy"></img>
        ))}
      </section>
    </div>
  );
}

export default App;
