function AnimalShow() {
	/* Variation 01 of Event Handler */
	function handleClick() {
		console.log("Button was clicked!");
	}

	return (
		<div>
			<button onClick={handleClick}>Add Animal</button>
		</div>
	);
}

export default AnimalShow;