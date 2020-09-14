import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
	return (
		<div>
			<div>props.good {props.good}</div>
			<div>props.neutral {props.neutral}</div>
			<div>props.bad {props.bad}</div>
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

	return (
		<div>
			<h1>give feedback</h1>
			<button onClick={() => setGood(good + 1)}>good</button>
			<button onClick={() => setNeutral(neutral + 1)}>neutral</button>
			<button onClick={() => setBad(bad + 1)}>bad</button>
			<h1>statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
