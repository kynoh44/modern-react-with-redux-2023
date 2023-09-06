function SearchBar() {
	const handleFormSubmit = (event) => {
		event.preventDefault();
		
		/* NEVER EVER EVER DO THIS! */
		//onSubmit(document.querySelector('input').value);
	};

	return(
		<div>
			<form onSubmit={handleFormSubmit}>
				<input />
			</form>
		</div>
	);
}

export default SearchBar;