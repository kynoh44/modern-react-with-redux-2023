import { useState } from "react";

function App() {
	const [count, setCount] = useState(110);
	
	function handleClick() {
		setCount(count + 1);
	} 

	function handleClick() {
		setCount(count + 1);
	}
	return (
		<div>
			<button onClick={handleClick}>Add Animal</button>
			<div>Number of animals: {count}</div>
		</div>
	);
}

export default App;