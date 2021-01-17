import React from "react";
import "./JokeCard.css";

const JokeCard = ({
  joke,
  id,
  type,
  key,
  setup,
  punchline,
  addJoke,
  removeJoke,
}) => {
  return (
    <div id={id} key={key} className="joke-card">
      <p>
        <b>Setup:</b>
        {setup}
      </p>
      <p>
        <b>Punchline:</b>
        {punchline}
      </p>
      <div className="button-bar">
        <button className="scrap-it-btn" onClick={() => removeJoke(joke)}>
          🗑️
        </button>
        <button className="scrap-it-btn" onClick={() => addJoke(joke)}>
          ➕
        </button>
      </div>
    </div>
  );
};

export default JokeCard;
