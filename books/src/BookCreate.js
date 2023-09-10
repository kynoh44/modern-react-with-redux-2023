import { useState } from "react";

function BookCreate({ onCreate }) {
	const [title, setTitle] = useState("");
	const [id, setId] = useState(0);

	const handleFormSubmit = (event) => {
		event.preventDefault();
		onCreate(title);
		setTitle("");
	};

	const handleChange = (event) => {
		setTitle(event.target.value);
	};

	return(
		<div>
			<form onSubmit={handleFormSubmit}>
				<label>Title</label>
				<input onChange={handleChange} value={title} />
				<button>Submit</button>
			</form>
		</div>
	);
}

export default BookCreate;