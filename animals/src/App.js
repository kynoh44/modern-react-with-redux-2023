function App() {
	const handleMouseMove = () => {
		console.log('Button was clicked!')
	};
	/*
		This function is an Event handler or a Callback function
		the name of event handler is recommended to be named like "handle + EventName".
	*/

	return (
		<div>
		<button onMouseMove={handleMouseMove}>
			Add Animal
		</button>
	</div>
	);
}

export default App;