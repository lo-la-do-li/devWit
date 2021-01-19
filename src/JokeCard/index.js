import React from "react";
import "./JokeCard.css";
import PropTypes from "prop-types";

const JokeCard = ({
  joke,
  id,
  type,
  setup,
  punchline,
  isFavorite,
  addJoke,
  removeJoke,
}) => {
  return (
    <div id={id} key={id} className="joke-card">
      <p className="joke-prop">
        <b>Setup:</b>
      </p>
      <p className="joke-value">{setup}</p>
      <p className="joke-prop">
        <b>Punchline:</b>
      </p>
      <p className="joke-value">{punchline}</p>
      <div aria-label="joke-card-buttons" className="button-bar">
        {isFavorite && (
          <button
            aria-label={`remove-joke-${id}-from-set`}
            className="joke-card-btn"
            onClick={() => removeJoke(joke)}
          >
            🗑️
          </button>
        )}
        {!isFavorite && (
          <button
            aria-label={`add-joke-${id}-to-set`}
            className="joke-card-btn"
            onClick={() => addJoke(joke)}
          >
            ➕
          </button>
        )}
      </div>
    </div>
  );
};

JokeCard.propTypes = {
  joke: PropTypes.object,
  id: PropTypes.number,
  type: PropTypes.string,
  setup: PropTypes.string,
  punchline: PropTypes.string,
  isFavorite: PropTypes.bool,
  addJoke: PropTypes.func,
  removeJoke: PropTypes.func,
};
export default JokeCard;
