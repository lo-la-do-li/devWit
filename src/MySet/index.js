import React from "react";
import JokesContainer from "../JokesContainer";
import "./MySet.css";
import useGlobal from "../store";

const MySet = () => {
  const [myJokes, setMyJokes] = useGlobal((state) => state.myJokes);

  const removeJoke = (joke) => {
    console.log("works");
  };

  return (
    <section className="my-set">
      <h2>This is My Set</h2>
      <JokesContainer jokes={myJokes} removeJoke={removeJoke} />
      {/* {myJokes.map((myJokes, i) => (
        <h2>{myJokes.setup}</h2>
      ))} */}
    </section>
  );
};

export default MySet;
