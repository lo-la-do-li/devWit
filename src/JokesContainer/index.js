import React from "react";
import JokeCard from "../JokeCard";
import "./JokesContainer.css";
import PropTypes from "prop-types";

const JokesContainer = ({ jokes, addJoke, removeJoke }) => {
  const jokeCards = jokes.map((joke) => {
    return (
      <JokeCard
        joke={joke}
        id={joke.id}
        type={joke.type}
        setup={joke.setup}
        punchline={joke.punchline}
        mySet={joke.mySet}
        key={joke.id}
        addJoke={addJoke}
        removeJoke={removeJoke}
      />
    );
  });

  return <section className="jokes-container">{jokeCards}</section>;
};

JokesContainer.propTypes = {
  jokes: PropTypes.array,
  addJoke: PropTypes.func,
  removeJoke: PropTypes.func,
};

export default JokesContainer;
