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
	let message = 'Bye there!';	// Initialization of a Varaible

	/* Condition for Assigning to the Variable */
	if (Math.random() > 0.5) {
		message = 'Hello there!';
	}

	return <h1>{message}</h1>;	// How return JS Variable as an Element
}

/* 5) Show the component on the screen */
root.render(<App />);