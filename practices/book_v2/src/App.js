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
		console.log("fetchBooks function is called in every rendering.");
	}, );

	const deleteBook = (target) => {
		const deleteById = books.filter((book) => {
			return book.id !== target;
		});
		setBooks(deleteById);
	};

	const editBook = (target, newTitle) => { 
		const editById = books.map((book) => {
			if (book.id === target) {
				return { ...book, title: newTitle};
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