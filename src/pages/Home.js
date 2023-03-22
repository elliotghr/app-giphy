import { Helmet } from "react-helmet";
import ListOfGifs from "../components/ListOfGifs";
import SearchForm from "../components/SearchForm";
import LazyTrending from "../components/TrendigSearches";
import useGifs from "../hooks/useGifs";
import "./Home.css";

// Array para renderizar los diferentes links
// const POPULAR_GIFS = ["Morty", "Spiderman", "Cookie Monster", "Bayern Munchen"];

const Home = () => {
  const { gifs } = useGifs();

  return (
    <div className="Home">
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <section className="Home-container">
        <article>
          <SearchForm ></SearchForm>
        </article>
        <article className="list-of-gifs">
          <h3>Última busqueda </h3>
          <ListOfGifs gifs={gifs}></ListOfGifs>
        </article>
        <article className="trending">
          <LazyTrending></LazyTrending>
        </article>
      </section>
    </div>
  );
};

export default Home;
