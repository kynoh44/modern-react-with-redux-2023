import { useState, useContext } from 'react';
import BookContext from '../context/books';

function BookCreate() {
	const [title, setTitle] = useState("");	// Component State
	const { createBook } = useContext(BookContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		createBook(title);
		setTitle("");
	};

	const handleChange = (event) => {
		setTitle(event.target.value);
	};

	return(
		<div className='book-create'>
			<h3>Add a Book</h3>
			<form onSubmit={handleSubmit}>
				<input className='input' value={title} onChange={handleChange}></input>
				<button className='button'>Submit</button>
			</form>
		</div>
	);
}

export default BookCreate;