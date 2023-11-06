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

	console.log(books);

	return(
		<div>
			<div>
				{books.length}
				<BookCreate onCreate={createBook} />
				<BookList books={books} />
			</div>
		</div>
	);
}

export default App;