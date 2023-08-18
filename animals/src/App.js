function App() {
	/*
	Inline arrow function is common in professional projects.
	*/
	
	// Define the arrow function
	const handleClick = () => {
		console.log('Hello, there!');
	};

	return (
		<div>
			<button
				onClick={() => console.log('Button was clicked!')}>
					Add Animal
			</button>

			<button onClick={handleClick}>Test button</button>
		</div>
	);
}

export default App;