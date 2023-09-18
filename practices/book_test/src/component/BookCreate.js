import { useState } from "react";

function BookCreate({ onCreate }) {
	const [title, setTitle] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		onCreate(title);
	};

	const handleChange = (event) => {
		setTitle(event.target.value);
	};

	return(
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange}/>
				<button>Submit</button>
			</form>
	);
}

export default BookCreate;