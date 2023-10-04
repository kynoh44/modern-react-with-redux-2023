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
		const deleteById = books.filter((book) => {
			return book.id !== target;
		});
		setBooks(deleteById);
	};

	const editBook = (target, newTitle) => { 
		const editById = books.map((book) => {
			if (book.id === target) {
				return { ...book, title: newTitle};
			}
			return book;
		});
		setBooks(editById);
	};

	return(
		<div className='app'>
			<h1>Reading List</h1>
			<BookList books={books} onDelete={deleteBook} onEdit={editBook}/>
			<BookCreate onCreate={createBook}/>
		</div>
	);
}

export default App;