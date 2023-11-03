import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
	const [books, setBooks] = useState([				//	State as an array of objects
		{ id: 0, title: "test0", location: "A" },
		{ id: 1, title: "test1", location: "B" },
		{ id: 2, title: "test2", location: "C" },
		{ id: 3, title: "test3", location: "D" }
	]);
	
	const createBook = (title) => {
		const updateBooks = [...books, { id: 4, title, location: "E" }];
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