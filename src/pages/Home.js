import React from "react";
import { useNavigate } from "react-router-dom";
import ListOfGifs from "../components/ListOfGifs";
import SearchForm from "../components/SearchForm";
import LazyTrending from "../components/TrendigSearches";
import useGifs from "../hooks/useGifs";
import "./Home.css";

// Array para renderizar los diferentes links
// const POPULAR_GIFS = ["Morty", "Spiderman", "Cookie Monster", "Bayern Munchen"];

const Home = () => {
  const navigate = useNavigate();
  const { gifs } = useGifs();

  const handleSubmit = ({ keyword }) => {
    navigate(`/search/${keyword}`);
  };

  return (
    <div className="Home">
      <section className="Home-container">
        <article>
          <SearchForm onSubmit={handleSubmit}></SearchForm>
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
