import React from 'react';
import ReactDOM from 'react-dom';
const Title = ({ course }) => <h1>{course}</h1>;
const Exercises = ({ part, exercises }) => (
	<p>
		{part} {exercises}
	</p>
);
const Final = ({ part1, part2, part3 }) => {
	return (
		<p>
			{part1} {part2} {part3}
		</p>
	);
};
const App = () => {
	const course = 'Half Stack application development';
	const part1 = 'Fundamentals of  React';
	const exercises1 = 10;
	const part2 = 'Using props to pass data';
	const exercises2 = 7;
	const part3 = 'State of a component';
	const exercises3 = 14;

	return (
		<div>
			<Title course={course} />
			<Exercises part={part1} exercises={exercises1} />
			<Exercises part={part2} exercises={exercises2} />
			<Exercises part={part3} exercises={exercises3} />
			Number of exercises <Final part1={part1} part2={part2} part3={part3} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
