function AnimalShow() {

	return (
		<div>
			{/* Variation 02 of Event Handler */}
			<button onClick={function() {
				console.log("Button was clicked!");
			}}>Add Animal</button>
		</div>
	);
}

export default AnimalShow;