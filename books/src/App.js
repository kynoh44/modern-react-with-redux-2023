import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
	const [books, setBooks] = useState(["test0", "test1", "test2"]);
	
	const createBook = (title, index) => {
		const updateBooks = [
			...books.slice(0, index),
			title,
			...books.slice(index)
		];
		setBooks(updateBooks);
		console.clear();
	};
	/* 
		books.slice(n)				=>	Array의 idx[n]에 있는 element부터 마지막 element까지 array를 return
		books.slice(n, m)			=>	Array의 idx[n]에 있는 element부터 idx[m - 1] element까지 array를 return
		...books.slice(n)			=>	Array의 idx[n]에 있는 element부터 마지막 element까지 element(s)를 return
		...books.slice(n, m)	=>	Array의 idx[n]에 있는 element부터 idx[m - 1] element까지 element(s)를 return
	*/
	console.log(books);
	console.log("books.slice(n) => Return array from index[n]\n", books.slice(0));
	console.log("books.slice(n, m) => Return array from index[n] to index[m - 1]\n", books.slice(0, 2));
	console.log("...books.slice(n) => Return element(s) from index[n]\n", ...books.slice(0));
	console.log("...books.slice(n, m) => Return array from index[n] to index[m - 1]\n", ...books.slice(0, 2));
	
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