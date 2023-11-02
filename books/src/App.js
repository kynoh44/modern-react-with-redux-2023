import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
	const [books, setBooks] = useState(["test0", "test1", "test2"]);
	
	const createBook = (title) => {
		const updateBooks = books.filter( (book, idx) => {
			return(
				idx !== 2
				//(idx !== 2) && (book != title)	// Additional filter for value
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