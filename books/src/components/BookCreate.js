function BookCreate({ onCreate }) {
	const handleClick = () => {
		onCreate("insert1", 1)
	};

	return(
		<div>
			<button onClick={handleClick}>Insert in State</button>
		</div>
	);
}

export default BookCreate;