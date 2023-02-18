import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
const POPULAR_GIFS = ["Morty", "Spiderman", "Cookie Monster", "Bayern Munchen"];

const Home = () => {
  return (
    <div className="Home">
      <section className="Home-container">
        <article>
          <h1>Gify </h1>
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
