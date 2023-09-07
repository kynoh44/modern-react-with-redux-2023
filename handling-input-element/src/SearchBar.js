import { useState } from 'react';

function SearchBar({ onSubmit }) {
	const [term, setTerm] = useState("");

	const handleFormSubmit = (event) => {
		event.preventDefault();
		onSubmit(term);
		//console.log(term);
	};

	const handleChange = (event) => {
		setTerm(event.target.value);
		//console.log(term);
	};

	return(
		<div>
			<form onSubmit={handleFormSubmit}>
				<input value={term} onChange={handleChange} />
			</form>
		</div>
	);
}

export default SearchBar;