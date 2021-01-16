import React from 'react';
import JokesContainer from '../JokesContainer';
import './MySet.css';

function MySet() {
  return (
    <section className="my-set">
      <h2>This is My Set.</h2>
      <JokesContainer />
    </section>
  );
}

export default MySet;