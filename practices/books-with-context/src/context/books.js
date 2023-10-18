import { createContext, useState } from 'react';

const BookContext = createContext();

/* Use Context for shared data which is(are) the application state(s) */

function Provider({ children }) {
	const [books, setBooks] = useState([]);
	
	const fetchBooks = async () => {
		const response = await axios.get("http://localhost:3001/books");

		setBooks(response.data);
	};

	const createBook = async (title) => {
		const response = await axios.post("http://localhost:3001/books",
		{
			title
		});
		
		const updatedBooks = [...books, response.data];
		setBooks(updatedBooks);
	};

	const editBook = async (target, newTitle) => {
		const response = await axios.put(`http://localhost:3001/books/${target}`, {
			title: newTitle
		});

		const editById = books.map((book) => {
			if (book.id === target) {
				return {...book, ...response.data};
			}

			return book;
		});
		setBooks(editById);
	};
	
	const deleteBook = async (target) => {
		await axios.delete(`http://localhost:3001/books/${target}`);
		
		const deleteById = books.filter((book) => {
			return book.id !== target;
		});

		setBooks(deleteById);
	};
	
	return(
		<BookContext.Provider value={{/* The Single Object for sharing */}}>
			{children}
		</BookContext.Provider>
	);
}

export default BookContext;
export { Provider };