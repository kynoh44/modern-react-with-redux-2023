import { useState } from "react";
import useBookContext from '../hooks/use-book-context';

function BookEdit({ book, onEditSubmit }) {
	const [newTitle, setNewTitle] = useState(book.title);
	const { editBook } = useBookContext();

	const handleSubmit = (event) => {
		event.preventDefault();
		onEditSubmit();
		editBook(book.id, newTitle);
		setNewTitle("");
	};

	const handleChange = (event) => {
		setNewTitle(event.target.value);
	};

	return(
			<form className="book-edit" onSubmit={handleSubmit}>
				<label>Title</label>
				<input className="input" value={newTitle} onChange={handleChange} />
				<button className="button is-primary">Save</button>
			</form>
	);
}

export default BookEdit;