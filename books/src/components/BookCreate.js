import { useState } from 'react';

function BookCreate({ onCreate }) {
	const [title, setTitle] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		onCreate(title);
		setTitle("");
	};

	const handleChange = (event) => {
		setTitle(event.target.value);
	};

	return(
		<div>
			<form onSubmit={handleSubmit}>
				<input value={title} onChange={handleChange}></input>
				<button >Add</button>
			</form>
		</div>
	);
}

export default BookCreate;