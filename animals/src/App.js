function App() {
	/*
	Inline arrow function is common in professional projects.
	*/
	
	return (
		<div>
			<button
				onClick={() => console.log('Button was clicked!')}>
					Add Animal
			</button>
		</div>
	);
}

export default App;