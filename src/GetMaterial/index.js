import React, { useState } from "react";
import JokesContainer from "../JokesContainer";
import "./GetMaterial.css";
import useGlobal from "../store";
import { fetchRandomJoke, fetchTenJokes } from "../apiCalls";

const GetMaterial = () => {
  const [randomJoke, setRandomJoke] = useState([]);
  const [jokes, setJokes] = useState([]);
  const [globalState, globalActions] = useGlobal();

  const getRandomJoke = async () => {
    await fetchRandomJoke().then((jokeData) => setRandomJoke(jokeData));
    setJokes([]);
  };

  const getTenJokes = async () => {
    await fetchTenJokes().then((jokesData) => setJokes(jokesData));
    setRandomJoke([]);
  };

  const addJoke = (joke) => {
    joke.isFavorite = true;
    globalActions.addToMySet(joke);
  };

  return (
    <section className="get-material">
      <h3 className="header-get-material">
        <i>Need Some New Material?</i>
      </h3>
      <div className="btn-bar">
        <button onClick={getRandomJoke}>Get A Joke</button>
        <button onClick={getTenJokes}>Get 10 Jokes</button>
      </div>
      {randomJoke && <JokesContainer jokes={randomJoke} addJoke={addJoke} />}
      {jokes && <JokesContainer jokes={jokes} addJoke={addJoke} />}
    </section>
  );
};

export default GetMaterial;
