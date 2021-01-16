import React, { useState } from 'react';
import JokeCard from '../JokeCard';
import './JokesContainer.css';

const JokesContainer = () => {
  
  const removeJoke = (id) => {
    console.log(id);
  }
  
  const jokeCards = jokes.map(joke => {
    return(
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
	})

	return(
		<section className='jokes-container'>
      <h2>Funny Stuff!</h2>
			{jokeCards}
		</section>
	)
}

export default JokesContainer;