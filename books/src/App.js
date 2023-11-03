import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
	const [books, setBooks] = useState(
		{ id: 0, title: "test0", location: "A" }
	);
	
	const createBook = (title) => {
		const updateBooks = { ...books, title: title, location: "B", pages: 259 };
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