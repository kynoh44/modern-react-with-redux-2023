import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App() {
	const [books, setBooks] = useState([]);	//	State as an array of objects

	const fetchBooks = async () => {
		const response = await axios.get("http://localhost:3001/books");
		setBooks(response.data);
	};

	useEffect(() => {
		fetchBooks();
		console.log("Body of arrow function is called in every rendering!!");
	}, );

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

	const editBookById = (id, title) => {
		const updateBooks = books.map((book) => {
			if(id === book.id) {
				return {...book, title};
			}

			return book;
		});

		setBooks(updateBooks);
	};

	const deleteBookById = (target) => {
		const updateBooks = books.filter((book) => {
			console.log(target);
			return (target !== book.id);
		});

		setBooks(updateBooks);
	};

	console.log(books);

	return(
		<div className='app'>
			<h1>Reading List</h1>
			<BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
			<BookCreate onCreate={createBook} />
		</div>
	);
}

export default App;