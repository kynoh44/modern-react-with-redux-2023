import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App() {
	const [books, setBooks] = useState([]);	// Application State

	const fetchBooks = async () => {
		const response = await axios.get("http://localhost:3001/books");
		setBooks(response.data);
	};

	useEffect(() => {
		fetchBooks();
	}, []);

	const createBook = async (title) => {
		const response = await axios.post("http://localhost:3001/books", {
			title
		});

		const updateBooks = () => {
			return [ ...books, response.data ];
		};
		setBooks(updateBooks);
		console.clear();
	};

	const editBookById = async (id, title) => {	// Modify application state
		const response = await axios.put(`http://localhost:3001/books/${id}`, {title});
		const updateBooks = books.map((book) => {
			if(id === book.id) {
				return {...book, ...response.data};
			}
			console.log("PUT Response : ", response.data);
			return book;
		});

		setBooks(updateBooks);
	};

	const deleteBookById = async (target) => {	// Modify application state
		const response = await axios.delete(`http://localhost:3001/books/${target}`);
		const updateBooks = books.filter((book) => {
			console.log("target : ", target, "DELETE Response : ", response.request.responseURL);
			return (target !== book.id);
		});

		setBooks(updateBooks);
	};

	console.log("State data : ", books);

	return(
		<div className='app'>
			<h1>Reading List</h1>
			<BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
			<BookCreate onCreate={createBook} />
		</div>
	);
}

export default App;