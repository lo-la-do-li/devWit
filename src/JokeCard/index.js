import React from "react";
import "./JokeCard.css";

const JokeCard = ({
  joke,
  id,
  type,
  setup,
  punchline,
  addJoke,
  removeJoke,
}) => {
  return (
    <div id={id} key={id} className="joke-card">
      <p>
        <b>Setup:</b>
        {setup}
      </p>
      <p>
        <b>Punchline:</b>
        {punchline}
      </p>
      <div aria-labelledby="joke-card-buttons" className="button-bar">
        <button
          aria-labelledby="remove-joke-button"
          className="joke-card-btn"
          onClick={() => removeJoke(joke)}
        >
          🗑️
        </button>
        <button
          aria-labelledby="add-joke-button"
          className="joke-card-btn"
          onClick={() => addJoke(joke)}
        >
          ➕
        </button>
      </div>
    </div>
  );
};

export default JokeCard;
