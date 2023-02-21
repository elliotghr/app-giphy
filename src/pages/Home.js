import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ListOfGifs from "../components/ListOfGifs";
import useGifs from "../hooks/useGifs";
import "./Home.css";

// Array para renderizar los diferentes links
const POPULAR_GIFS = ["Morty", "Spiderman", "Cookie Monster", "Bayern Munchen"];

const Home = () => {
  const navigate = useNavigate();
  let [keyword, setKeyword] = useState("");
  
  const { loading, gifs } = useGifs();

  const handleSubmit = (e) => {
    e.preventDefault();
    //Generamos un navigate programmatically
    navigate(`/search/${keyword}`);
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="Home">
      <section className="Home-container">
        <article>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Search a gif here..."
              onChange={handleChange}
              type="text"
              value={keyword}
            ></input>
          </form>
          <h3>Última busqueda </h3>
          <ListOfGifs gifs={gifs}></ListOfGifs>
          <h3>Los gifs más populares </h3>
          <ul>
            {POPULAR_GIFS.map((el) => (
              <li key={el}>
                <NavLink to={`/search/${el}`}>Gifs de {el}</NavLink>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Home;
