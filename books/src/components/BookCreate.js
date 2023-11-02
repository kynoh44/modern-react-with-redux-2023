function BookCreate({ onCreate }) {
	const handleClick = () => {
		onCreate("test1")
	};

	return(
		<div>
			<button onClick={handleClick}>Delete in State</button>
		</div>
	);
}

export default BookCreate;