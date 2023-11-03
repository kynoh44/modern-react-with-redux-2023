import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
	const [books, setBooks] = useState(		//	State as an object
		{ id: 0, title: "test0", location: "A" }
	);
	
	const createBook = () => {
		const { title, ...rest } = books;	// The object of specified member and rest members is books
		setBooks(rest);
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