import { useState, useEffect, useContext } from 'react';
import BookCreate from './component/BookCreate';
import BookList from './component/BookList';
import axios from 'axios';
import BookContext from './context/books';

function App() {
	useEffect(() => {
		fetchBooks();
	}, []);

	const { fetchBooks } = useContext(BookContext);

	return(
		<div className='app'>
			<h1>Reading List</h1>
			<BookList />
			<BookCreate />
		</div>
	);
}

export default App;