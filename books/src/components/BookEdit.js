import { useState } from 'react';

function BookEdit({ book, onEdit, onEditSubmit }) {
	const [title, setTitle] = useState(book.title);

	const handleSubmit = (event) => {
		event.preventDefault();
		onEdit(book.id, title);
		onEditSubmit();
	};

	const handleChange = (event) => {
		setTitle(event.target.value);
	};

	return(
		<div>
			<form onSubmit={handleSubmit}>
				<input value={title} onChange={handleChange} placeholder={book.title}>
				</input>
				<button>
					Save
				</button>
			</form>
		</div>
	);
}

export default BookEdit;