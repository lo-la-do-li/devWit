import React from 'react';
import './JokeCard.css'

const JokeCard = ({ id, type, setup, punchline, removeJoke }) => {
	
	return (
		<div className='joke-card'>
			<h3>Joke</h3>
				<p><b>Setup:</b> {setup}</p>
				<p><b>Punchline:</b> {punchline}</p>
			<button className='scrap-it-btn' onClick={() => removeJoke(id)}>SCRAP IT 🗑️</button>
		</div>
	)
}

export default JokeCard;