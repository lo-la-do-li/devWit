import React, { useEffect, useState } from "react";
import JokesContainer from "../JokesContainer";
import "./MySet.css";
import useGlobal from "../store";

const MySet = () => {
  const [globalState, globalActions] = useGlobal();
  const [myJokes, setMyJokes] = useGlobal((state) => state.myJokes);

  // useEffect(() => {
  //   console.log("I rerendered:", myJokes);
  // }, [myJokes]);

  const removeJoke = (joke) => {
    globalActions.deleteFromMySet(joke);
  };

  return (
    <section className="my-set">
      <h2>This is My Set</h2>
      <JokesContainer jokes={myJokes} removeJoke={removeJoke} />
      {/* {myJokes.map((myJoke, i) => (
        <h2 key={i} onClick={() => removeJoke(myJoke)}>
          {myJoke.setup}
        </h2>
      ))} */}
    </section>
  );
};

export default MySet;
