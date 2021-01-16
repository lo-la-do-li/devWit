import React, { useState } from "react";
import JokesContainer from "../JokesContainer";
import JokeCard from "../JokeCard";
import "./GetMaterial.css";
import mockData from "../mockData";

function GetMaterial() {
  const [randomJoke, setRandomJoke] = useState(null);
  const [jokes, setJokes] = useState([]);

  const getRandomJoke = () => {
    const oneJoke = mockData.joke;
    console.log(oneJoke);
    setRandomJoke(oneJoke);
  };

  const getTenJokes = () => {
    const tenJokes = mockData.jokes;
    console.log(tenJokes);
    setJokes(tenJokes);
  };

  return (
    <section className="get-material">
      <h3>This is GetMaterial.</h3>
      <div className="btn-bar">
        <button onClick={getRandomJoke}>Get A Joke</button>
        <button onClick={getTenJokes}>Get 10 Jokes</button>
      </div>
      {randomJoke && <JokeCard randomJoke={randomJoke} />}
      {jokes && <JokesContainer jokes={jokes} />}
    </section>
  );
}

export default GetMaterial;
