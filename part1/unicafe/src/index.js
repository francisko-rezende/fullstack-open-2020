import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
	return (
		<div>
			<button onClick={props.handleGood}>{props.good}</button>
			<button onClick={props.handleNeutral}>{props.neutral}</button>
			<button onClick={props.handleBad}>{props.bad}</button>
		</div>
	);
};

const Statistics = (props) => {
	if (props.all === 0) {
		return <div>No feedback given</div>;
	}

	return (
		<div>
			<Statistic all={props.all} text="good" value={props.good} />
			<Statistic all={props.all} text="neutral" value={props.neutral} />
			<Statistic all={props.all} text="bad" value={props.bad} />
			<Statistic all={props.all} text="all" value={props.good + props.neutral + props.bad} />
			<Statistic
				all={props.all}
				text="average"
				value={(props.good * 1 + props.bad * -1) / (props.good + props.neutral + props.bad)}
			/>
			<Statistic
				all={props.all}
				text="positive"
				value={props.good / (props.good + props.neutral + props.bad) * 100 + ' %'}
			/>
		</div>
	);
};

const Statistic = (props) => {
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<td>{props.text}</td>
						<td>{props.value}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

// const Statistic = (props) => {
// 	return (
// 		<div>
// 			<div>
// 				{props.text} {props.value}
// 			</div>
// 		</div>
// 	);
// };

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
			<Button
				handleGood={handleGood}
				good="good"
				handleNeutral={handleNeutral}
				neutral="neutral"
				handleBad={handleBad}
				bad="bad"
			/>
			<h1>statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad} all={all} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
