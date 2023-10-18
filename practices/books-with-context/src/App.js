import { useState, useEffect } from 'react';
import BookCreate from './component/BookCreate';
import BookList from './component/BookList';
import axios from 'axios';

function App() {
	useEffect(() => {
		fetchBooks();
	}, []);

	return(
		<div className='app'>
			<h1>Reading List</h1>
			<BookList />
			<BookCreate />
		</div>
	);
}

export default App;