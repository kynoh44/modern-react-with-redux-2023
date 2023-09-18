import { useState } from "react";

function BookEdit({ book, onEdit, closeEdit }) {
	const [newTitle, setNewTitle] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		onEdit(book.id, newTitle);
		setNewTitle("");
		closeEdit();
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