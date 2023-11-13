import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App() {

	useEffect(() => {
		fetchBooks();
	}, []);

	return(
		<div className='app'>
			<h1>Reading List</h1>
			<BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
			<BookCreate onCreate={createBook} />
		</div>
	);
}

export default App;