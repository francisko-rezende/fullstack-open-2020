import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// const Button = (props) => {
//   <button onClick={() => set}>{props.text}</button>
// }

// const Statistic = (props) => {
// 	return (
// 		<div>
// 			{props.category} {props.count}
// 		</div>
// 	);
// };

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
      <div>Good {good}</div>
      <div>Neutral {neutral}</div>
      <div>Bad {bad}</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
