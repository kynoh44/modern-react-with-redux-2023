import { useState } from "react";

function SearchBar({ onSubmit }) {
	const [term, setTerm] = useState("");

	const handleFormSubmit = (event) => {
		event.preventDefault();
		onSubmit(term);
	};

	const handleChange = (event) => {
		//console.log(event);
		//console.log(event.target.value);
		setTerm(event.target.value);
	};

	return(
		<div>
			<form onSubmit={handleFormSubmit}>
				{/*<section>You searched : {term}</section>*/}
				<input value={term} onChange={handleChange}/>
				{/*<section>{term.length < 3 && 'Wait! Term must be longer'}</section>*/}
			</form>
		</div>
	);
}

export default SearchBar;