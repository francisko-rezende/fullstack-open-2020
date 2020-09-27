import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ courses }) => {
	return (
		<div>
			{courses.map(course => <h1>{course.name}</h1>)}
		</div>
	);
};

const Part = (props) => {
	return (
		<p>
			{props.part.name} {props.part.exercises}
		</p>
	);
};

const Content = ({ course }) => {
	return <div>{course.parts.map((part) => <Part key={part.id} part={part} />)}</div>;
};

const Total = ({ course }) => {
	return (
		<div>
			<b>total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b>
		</div>
	);
};

const Courses = ({ courses }) => {
	return (
		<div>
			<Header courses={courses} />
			{/* <Content course={course} />
			<Total course={course} /> */}
		</div>
	);
};

const App = () => {
	const courses = [
		{
			name: 'Half Stack application development',
			id: 1,
			parts: [
				{
					name: 'Fundamentals of React',
					exercises: 10,
					id: 1
				},
				{
					name: 'Using props to pass data',
					exercises: 7,
					id: 2
				},
				{
					name: 'State of a component',
					exercises: 14,
					id: 3
				},
				{
					name: 'Redux',
					exercises: 11,
					id: 4
				}
			]
		},
		{
			name: 'Node.js',
			id: 2,
			parts: [
				{
					name: 'Routing',
					exercises: 3,
					id: 1
				},
				{
					name: 'Middlewares',
					exercises: 7,
					id: 2
				}
			]
		}
	];
	// const course = {
	// 	name: 'Half Stack application development',
	// 	parts: [
	// 		{
	// 			name: 'Fundamentals of React',
	// 			exercises: 10,
	// 			id: 1
	// 		},
	// 		{
	// 			name: 'Using props to pass data',
	// 			exercises: 7,
	// 			id: 2
	// 		},
	// 		{
	// 			name: 'State of a component',
	// 			exercises: 14,
	// 			id: 3
	// 		}
	// 	]
	// };

	return (
		<div>
			<Courses courses={courses} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
