import React, { useState } from "react";
import JokesContainer from "../JokesContainer";
// import JokeCard from "../JokeCard";
import "./GetMaterial.css";
import mockData from "../mockData";
import useGlobal from "../store";

const GetMaterial = () => {
  const [randomJoke, setRandomJoke] = useState([]);
  const [jokes, setJokes] = useState([]);
  const [globalState, globalActions] = useGlobal();
  const [myJokes, setMyJokes] = useGlobal((state) => state.myJokes);

  const getRandomJoke = () => {
    const oneJoke = mockData.joke;
    console.log(oneJoke);
    setJokes([]);
    // globalActions.addToMySet(oneJoke);

    randomJoke.push(oneJoke);
    // console.log(globalState);
  };

  const getTenJokes = () => {
    const tenJokes = mockData.jokes;
    console.log(tenJokes);
    setRandomJoke([]);
    setJokes(tenJokes);
  };

  // const removeJoke = () => {
  //   console.log("works");
  // };
  const addJoke = (joke) => {
    console.log(globalState);
    console.log(joke);
    globalActions.addToMySet(joke);
  };

  return (
    <section className="get-material">
      <h3>This is GetMaterial.</h3>
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
