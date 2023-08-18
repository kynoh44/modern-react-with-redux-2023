function App() {
	//const handleClick = function() {
	//	console.log('Button was clicked!');
	//};
	/*
	Arrow function is equivalent with a definition of this function
	And this definition can be defined below code block.
	*/
	
	return (
		<div>
			<button
				onClick={function() {
					console.log('Button was clicked!');
				}}
			>Add Animal
			</button>
		</div>
	);
}

export default App;