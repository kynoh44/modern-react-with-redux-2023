import { useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import useBookContext from './hooks/use-book-context';

function App() {
	const { fetchBooks } = useBookContext();
	const [ counter, setCounter ] = useState(0);

	useEffect(() => {
		document.body.onclick = () => {
			console.log("body element is clicked! Counter is ", counter);
		};

		fetchBooks();
	}, [fetchBooks]);

	return(
		<div className='app'>
			<h1>Reading List</h1>
			<BookList />
			<BookCreate />
			<button onClick={() => setCounter(counter + 1)}>CleanUp</button>
			<div>Counter : {counter}</div>
		</div>
	);
}

export default App;