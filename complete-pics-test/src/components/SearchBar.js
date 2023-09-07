import { useState } from "react";
import "../css/SearchBar.css"

function SearchBar({ onSubmit }) {
	const [term, setTerm] = useState("");

	const handleFormSubmit = (event) => {
		event.preventDefault();
		onSubmit(term);
	};

	const handleChange = (event) => {
		setTerm(event.target.value);
	};

	return(
		<div>
			<form className="search-bar" onSubmit={handleFormSubmit}>
				<input			
					value={term} onChange={handleChange}
					placeholder="Search You Want.." />
			</form>
		</div>
	);
}

export default SearchBar;