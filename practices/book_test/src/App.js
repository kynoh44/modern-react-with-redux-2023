import { useState } from 'react';
import BookCreate from './component/BookCreate';
import BookList from './component/BookList';

function App() {
	const [books, setBooks] = useState([]);
	const createBook = (title) => {
		const updatedBooks = [...books, {id: Math.round(Math.random() * 9999), title}];
		setBooks(updatedBooks);
	};

	console.log(books);

	return(
		<div>
			<label>Add a Book</label>
			<BookCreate onCreate={createBook}/>
			<BookList books={books}/>
		</div>
	);
}

export default App;