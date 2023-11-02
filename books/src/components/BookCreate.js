function BookCreate({ onCreate }) {
	const handleClick = () => {
		onCreate("test0")
	};

	return(
		<div>
			<button onClick={handleClick}>Add in State</button>
		</div>
	);
}

export default BookCreate;