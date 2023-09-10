import { useState } from 'react';
import BookCreate from './BookCreate';
import BookList from './components/BookList';

function App() {
	const [books, setBooks] = useState([]);

	const createBook = (title) => {
		console.log("Need to add book with:", title);
		setBooks([...books, [title]])
	};

	return(
	<div>
		<div>
			<label>Reading List</label>
			<BookList books={books} />
		</div>
		<div>
			<label>Add a Book</label>
			<BookCreate onCreate={createBook}/>
		</div>
	</div>
	);
}

export default App;