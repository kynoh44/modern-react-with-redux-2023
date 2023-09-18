import { useState } from "react";

function BookEdit({ book, onEditSubmit }) {
	const [newTitle, setNewTitle] = useState(book.title);

	const handleSubmit = (event) => {
		event.preventDefault();
		onEditSubmit(book.id, newTitle);
		setNewTitle("");
	};

	const handleChange = (event) => {
		setNewTitle(event.target.value);
	};

	return(
		<div>
			<form onSubmit={handleSubmit}>
				{book.title}
				<label>Title</label>
				<input value={newTitle} onChange={handleChange} />
				<button>Save</button>
			</form>
		</div>
	);
}

export default BookEdit;