import { useState } from 'react';

function BookEdit({ book, onEdit }) {
	const [title, setTitle] = useState(book.title);

	const handleSubmit = (event) => {
		event.preventDefault();
		onEdit(book.id, title);
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