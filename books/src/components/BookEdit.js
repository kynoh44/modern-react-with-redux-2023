import { useState, useContext } from 'react';
import BookContext from '../context/books';

function BookEdit({ book, onEditSubmit }) {
	const [title, setTitle] = useState(book.title);	// Component State
	const { editBookById } = useContext(BookContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		onEditSubmit();
		editBookById(book.id, title);
	};

	const handleChange = (event) => {
		setTitle(event.target.value);
	};

	return(
			<form className='book-edit' onSubmit={handleSubmit}>
				<input className='input' value={title} onChange={handleChange} placeholder={book.title}>
				</input>
				<button className='button is-primary'>
					Save
				</button>
			</form>
	);
}

export default BookEdit;