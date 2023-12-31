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
		<div className="book-create">
			<h3>Add a Book</h3>
			<form onSubmit={handleFormSubmit}>
				<label>Title</label>
				<input className="input" onChange={handleChange} value={title} />
				<button className="button">Submit</button>
			</form>
		</div>
	);
}

export default BookCreate;