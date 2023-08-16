/* 1) Import the React and ReactDOM libraries */
import React from	'react';
import ReactDOM from 'react-dom/client';

/* 2) Get a reference to the div with ID root */
const el = document.getElementById('root');

/* 3) Tell React to take control of that element */
const root = ReactDOM.createRoot(el);

/* 4) Create a component */
function App() {
	//const inputType = 'number';
	//const minValue = 5;
	//return <input type={inputType} min={minValue} />;

	const message = "test";
	return (	
		<input
			style={{ border: '3px solid red', color: 'red'}}
			type="number"
			min={5}
			max={10}
			list={[1, 2, 3]}
			//style={{ color:'red' }}
			alt={message}
		/>
	);
	
}

/* 5) Show the component on the screen */
root.render(<App />);