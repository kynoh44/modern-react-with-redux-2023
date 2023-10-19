import { useEffect } from 'react';
import BookCreate from './component/BookCreate';
import BookList from './component/BookList';
import useBookContext from './hooks/use-book-context';

function App() {
	useEffect(() => {
		fetchBooks();
	}, []);

	const { fetchBooks } = useBookContext();

	return(
		<div className='app'>
			<h1>Reading List</h1>
			<BookList />
			<BookCreate />
		</div>
	);
}

export default App;