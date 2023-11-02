import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
	const [books, setBooks] = useState([]);
	
	const createBook = (title) => {
		const updateBooks = [...books, title];
		setBooks(updateBooks);
		console.log(books);
	};
	
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