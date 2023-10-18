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
			<BookList books={books} onDelete={deleteBook} onEdit={editBook}/>
			<BookCreate onCreate={createBook}/>
		</div>
	);
}

export default App;