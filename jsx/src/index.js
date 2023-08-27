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
	const message = { color: 'red'};	// Object is invalid
	
	return <h1>{message}</h1>;
}

/* 5) Show the component on the screen */
root.render(<App />);