import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
	const [books, setBooks] = useState([]);

	const createBook = (title) => {
		// How manipulate and update arays, objects in state system??
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