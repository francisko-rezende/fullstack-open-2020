import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
	if (props.all === 0) {
		return <div>No feedback given</div>;
  }
  
	return (
		<div>
			<div>good {props.good}</div>
			<div>neutral {props.neutral}</div>
			<div>bad {props.bad}</div>
			<div>all {props.good + props.neutral + props.bad}</div>
			<div>average {(props.good * 1 + props.bad * -1) / (props.good + props.neutral + props.bad)}</div>
			<div>positive {props.good / (props.good + props.neutral + props.bad) * 100} %</div>
		</div>
	);
};

const App = () => {
	// save clicks of each button to own state
	const [ good, setGood ] = useState(0);
	const [ neutral, setNeutral ] = useState(0);
	const [ bad, setBad ] = useState(0);
	const [ all, setAll ] = useState(0);

	const handleGood = () => {
		setGood(good + 1);
		setAll(all + 1);
	};

	const handleNeutral = () => {
		setNeutral(neutral + 1);
		setAll(all + 1);
	};

	const handleBad = () => {
		setBad(bad + 1);
		setAll(all + 1);
	};

	return (
		<div>
			<h1>give feedback</h1>
			<button onClick={handleGood}>good</button>
			<button onClick={handleNeutral}>neutral</button>
			<button onClick={handleBad}>bad</button>
			<h1>statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad} all={all} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
