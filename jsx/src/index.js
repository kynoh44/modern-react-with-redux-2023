/* 1) Import the React and ReactDOM libraries */
import React from	'react';
import ReactDOM from 'react-dom/client';
//import App from './App';

/* 2) Get a reference to the div with ID root */
const el = document.getElementById('root');

/* 3) Tell React to take control of that element */
const root = ReactDOM.createRoot(el);

/* 4) Create a component */
function App() {
	let ccBool = true;
	let ccKeyword = undefined;
	let ccNull = null;
	let ccArray = [1, 2, 3, "hello", undefined];

	return (
		<div>
			<h1>{ccBool}</h1>
			<h1>bool type cannot be displayed!</h1>

			<h2>{ccKeyword}</h2>
			<h2>Keyword cannot be displayed</h2>
			<div>
				<ul>
					<li>{ccNull}</li>
					<li>Above null cannot be displayed</li>
					<li>{ccArray}</li>
					<li>All elements of the array are displayed</li>
				</ul>
			</div>
		</div>
	);
}

/* 5) Show the component on the screen */
root.render(<App />);