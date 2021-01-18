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
      <div aria-label="joke-card-buttons" className="button-bar">
        <button
          aria-label={`remove-joke-${id}-from-set`}
          className="joke-card-btn"
          onClick={() => removeJoke(joke)}
        >
          🗑️
        </button>
        <button
          aria-label={`add-joke-${id}-to-set`}
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
