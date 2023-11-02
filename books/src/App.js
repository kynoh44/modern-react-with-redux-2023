import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
	const [books, setBooks] = useState([]);
	
	const createBook = (title) => {
		/* Bad Code : bug of hot module reload system */
		books.push({ id: 123, title: title});
		console.log(books);
		setBooks(books);
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