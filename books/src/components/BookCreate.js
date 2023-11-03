function BookCreate({ onCreate }) {
	const handleClick = () => {
		onCreate("test42")
	};

	return(
		<div>
			<button onClick={handleClick}>Modify and Add in State</button>
		</div>
	);
}

export default BookCreate;