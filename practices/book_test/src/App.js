import { useState } from 'react';
import BookCreate from './component/BookCreate';

function App() {
	const [books, setBooks] = useState([]);
	const createBook = (title) => {
		setBooks(books);
	};

	return(
		<div>
			<label>Add a Book</label>
			<BookCreate onCreate={createBook}/>
		</div>
	);
}

export default App;