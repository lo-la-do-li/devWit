import React, { useState } from "react";
import JokesContainer from "../JokesContainer";
import JokeCard from "../JokeCard";
import "./GetMaterial.css";
import mockData from "../mockData";

function GetMaterial() {
  const [randomJoke, setRandomJoke] = useState([]);
  const [jokes, setJokes] = useState([]);
  const [faveJokes, setFavJokes] = useState([]);

  const getRandomJoke = () => {
    const oneJoke = mockData.joke;
    console.log(oneJoke);
    setJokes([]);
    randomJoke.push(oneJoke);
    // setRandomJoke(oneJoke);
  };

  const getTenJokes = () => {
    const tenJokes = mockData.jokes;
    console.log(tenJokes);
    setRandomJoke([]);
    setJokes(tenJokes);
  };

  const removeJoke = () => {
    console.log("works");
  };

  return (
    <section className="get-material">
      <h3>This is GetMaterial.</h3>
      <div className="btn-bar">
        <button onClick={getRandomJoke}>Get A Joke</button>
        <button onClick={getTenJokes}>Get 10 Jokes</button>
      </div>
      {randomJoke && <JokesContainer jokes={randomJoke} />}
      {jokes && <JokesContainer jokes={jokes} />}
    </section>
  );
}

export default GetMaterial;
