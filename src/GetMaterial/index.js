import React, { useState } from "react";
import JokesContainer from "../JokesContainer";
import "./GetMaterial.css";
import useGlobal from "../store";
import { fetchRandomJoke, fetchTenJokes } from "../apiCalls";

const GetMaterial = () => {
  const [randomJoke, setRandomJoke] = useState([]);
  const [jokes, setJokes] = useState([]);
  const [globalState, globalActions] = useGlobal();
  // const [myJokes, setMyJokes] = useGlobal((state) => state.myJokes);

  const getRandomJoke = async () => {
    await fetchRandomJoke().then((jokeData) => setRandomJoke(jokeData));
    setJokes([]);
  };

  const getTenJokes = async () => {
    await fetchTenJokes().then((jokesData) => setJokes(jokesData));
    setRandomJoke([]);
  };

  const addJoke = (joke) => {
    globalActions.addToMySet(joke);
  };

  return (
    <section className="get-material">
      <h3>Need Some New Material?</h3>
      <div className="btn-bar">
        <button onClick={getRandomJoke}>Get A Joke</button>
        <button onClick={getTenJokes}>Get 10 Jokes</button>
      </div>
      {randomJoke && (
        <JokesContainer
          jokes={randomJoke}
          addJoke={addJoke}
          // removeJoke={removeJoke}
        />
      )}
      {jokes && (
        <JokesContainer
          jokes={jokes}
          addJoke={addJoke}
          // removeJoke={removeJoke}
        />
      )}
    </section>
  );
};

export default GetMaterial;
