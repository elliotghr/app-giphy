import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <ListOfGifs keyword={"dog"}></ListOfGifs>
      </section>
    </div>
  );
}

export default App;
