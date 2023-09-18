import { useState } from 'react';
import BookCreate from './component/BookCreate';
import BookList from './component/BookList';

function App() {
	const [books, setBooks] = useState([]);
	const createBook = (title) => {
		const updatedBooks = [...books, {id: Math.round(Math.random() * 9999), title}];
		setBooks(updatedBooks);
	};

	const deleteBook = (target) => {
		console.log(target);
		const deleteById = books.filter((book) => {
			return book.id != target;
		});
		setBooks(deleteById);
	};

	return(
		<div>
			<label>Add a Book</label>
			<BookCreate onCreate={createBook}/>
			<BookList books={books} onDelete={deleteBook} />
		</div>
	);
}

export default App;