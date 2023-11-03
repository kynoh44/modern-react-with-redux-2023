function BookCreate({ onCreate }) {
	const handleClick = () => {
		onCreate("test42")
	};

	return(
		<div>
			<button onClick={handleClick}>Add in State</button>
		</div>
	);
}

export default BookCreate;