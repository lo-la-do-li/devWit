import React, { useState } from "react";
import JokeCard from "../JokeCard";
import "./JokesContainer.css";
import mockData from "../mockData.js";

const JokesContainer = () => {
  const removeJoke = (id) => {
    console.log(id);
  };

  const jokeCards = mockData.mySet.map((joke) => {
    return (
      <JokeCard
        id={joke.id}
        type={joke.type}
        setup={joke.setup}
        punchline={joke.punchline}
        mySet={joke.mySet}
        key={joke.id}
        removeJoke={removeJoke}
      />
    );
  });

  return <section className="jokes-container">{jokeCards}</section>;
};

export default JokesContainer;
