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
	const custBorder = { border: "5px solid gold" };
	return (
		<div>
			<input style={{border: '3px solid red'}} type="number" min={5} max={10}/>
			<input style={custBorder} type="number" min={5} max={10}/>
		</div>
		);
}

/* 5) Show the component on the screen */
root.render(<App />);