import { useState } from 'react';	// React library must be imported to use 'useState()' function in a component.

function App() {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);	// call of setter function, usally defined in an event handler
	};

	return (
		<div>
			<button onClick={handleClick}>Add Animal</button>
			<div>Number of animals: {count}</div>
		</div>
	);
}

export default App;