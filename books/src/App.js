import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
	const [books, setBooks] = useState([
		{ id: 0, title: "test0" },
		{ id: 1, title: "test1" },
		{ id: 2, title: "test2" },
		{ id: 3, title: "test3" }
	]);
	
	const createBook = (title) => {
		const updateBooks = books.filter( (book, idx) => {
			return(
				book.title !== title
				//book.id !== 2
			);
		} );
		setBooks(updateBooks);
		console.clear();
	};

	console.log(books);

	return(
		<div>
			<div>
				{books.length}
				<BookCreate onCreate={createBook} />
			</div>
		</div>
	);
}

export default App;