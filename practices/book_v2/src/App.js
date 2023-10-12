import { useState, useEffect } from 'react';
import BookCreate from './component/BookCreate';
import BookList from './component/BookList';
import axios from 'axios';

function App() {
	const [books, setBooks] = useState([]);

	const createBook = async (title) => {
		const response = await axios.post("http://localhost:3001/books",
		{
			title
		});
		
		const updatedBooks = [...books, response.data];
		setBooks(updatedBooks);
	};

	const fetchBooks = async () => {
		const response = await axios.get("http://localhost:3001/books");

		setBooks(response.data);
	};

	useEffect(() => {
		fetchBooks();
	}, []);

	const deleteBook = (target) => {
		const deleteById = books.filter((book) => {
			return book.id !== target;
		});
		setBooks(deleteById);
	};

	const editBook = async (target, newTitle) => {
		//const response = await axios.put(`http://localhost:3001/books/${target}`, {
		//	title: newTitle
		//});
		// Error on request.. why?????????
		//console.log(response);

		const editById = books.map((book) => {
			if (book.id === target) {
				return { ...book, title: newTitle };
			}
			return book;
		});
		setBooks(editById);
	};

	return(
		<div className='app'>
			<h1>Reading List</h1>
			<BookList books={books} onDelete={deleteBook} onEdit={editBook}/>
			<BookCreate onCreate={createBook}/>
		</div>
	);
}

export default App;