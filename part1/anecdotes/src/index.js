import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

// const voteNumber = new Array(6).fill(0);

const Button = (props) => {
	return (
		<div>
			<button onClick={props.handle}>{props.text}</button>
		</div>
	);
};

const App = (props) => {
	const [ selected, setSelected ] = useState(0);
	const [ votes, countVotes ] = useState(Array(6).fill(0));

	const handleNewAnecdote = () => setSelected(Math.floor(Math.random() * 6));

	const handleVotes = () => {
		const votesCopy = [ ...votes ];
		votesCopy[selected] += 1;
		countVotes(votesCopy);
	};

	return (
		<div>
			<h1>Anecdote of the day</h1>
			{props.anecdotes[selected]}
			<div>has {votes[selected]} votes</div>
			<div>
				<Button handle={handleVotes} text="vote" />
				<Button handle={handleNewAnecdote} text="next anecdote" />
			</div>
			<h1>Anecdote with most votes</h1>
			{props.anecdotes[votes.indexOf(Math.max(...votes))]}
			<div>has {Math.max(...votes)} votes</div>
		</div>
	);
};
ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
