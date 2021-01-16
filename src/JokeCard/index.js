import React from "react";
import "./JokeCard.css";

const JokeCard = ({ id, type, setup, punchline, removeJoke }) => {
  return (
    <div className="joke-card">
      <p>
        <b>Setup:</b> {setup}
      </p>
      <p>
        <b>Punchline:</b> {punchline}
      </p>
      <div className="button-bar">
        <button className="scrap-it-btn" onClick={removeJoke(id)}>
          {" "}
          🗑️
        </button>
        <button className="scrap-it-btn" onClick={removeJoke(id)}>
          {" "}
          ➕
        </button>
      </div>
    </div>
  );
};

export default JokeCard;
