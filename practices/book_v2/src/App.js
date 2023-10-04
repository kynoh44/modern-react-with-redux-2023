import { useState } from 'react';
import BookCreate from './component/BookCreate';
import BookList from './component/BookList';
import axios from 'axios';

function App() {
	const [books, setBooks] = useState([]);
	const createBook = async (title) => {
		const response = await axios.post("http://localhost:3001/books",
		{
			title
		});
		console.log(response);
		// setBooks는 왜 안쓰지? data를 rest client api server에 저장하니까?
		// books도 아예 안쓰인다.
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