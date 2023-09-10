import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
	const [books, setBooks] = useState([]);

	const createBook = (title) => {
		// BAD CODE! Bug of Hot module Reload System
		books.push({ id: 123, title: title});
		console.log(books);
		setBooks(books);
	};

	return(
	<div>
		<div>
			{books.length}
			<label>Reading List</label>
			<BookList books={books} />
		</div>
		<div>
			<BookCreate onCreate={createBook}/>
		</div>
	</div>
	);
}

export default App;