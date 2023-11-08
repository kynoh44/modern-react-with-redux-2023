import { useState } from 'react';

function BookEdit({ book, onEditSubmit }) {
	const [title, setTitle] = useState(book.title);
	const [pages, setPages] = useState(book.pages);

	const handleSubmit = (event) => {
		event.preventDefault();
		onEditSubmit(book.id, title, pages);
	};

	const handleChangeTitle = (event) => {
		setTitle(event.target.value);
	};

	const handleChangePages = (event) => {
		setPages(event.target.value);
	};

	return(
			<form className='book-edit' onSubmit={handleSubmit}>
				<input className='input' value={title} onChange={handleChangeTitle} placeholder={book.title}>
				</input>
				<input className='input' value={pages} onChange={handleChangePages} placeholder={book.pages}>
				</input>
				<button className='button is-primary'>
					Save
				</button>
			</form>
	);
}

export default BookEdit;