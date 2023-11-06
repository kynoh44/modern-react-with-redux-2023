import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
	const [books, setBooks] = useState([]);	//	State as an array of objects
	
	const createBook = (title) => {
		const updateBooks = () => {
			return [ ...books, { id: Math.round(Math.random() * 9999), title }];
		};
		setBooks(updateBooks);
		console.clear();
	};

	const editBookById = (id, title) => {
		const updateBooks = books.map((book) => {
			if(id === book.id) {
				return {...book, title};
			}

			return book;
		});

		setBooks(updateBooks);
	};

	console.log(books);

	return(
		<div>
			<div>
				{books.length}
				<BookCreate onCreate={createBook} />
				<BookList books={books} onEdit={editBookById} />
			</div>
		</div>
	);
}

export default App;