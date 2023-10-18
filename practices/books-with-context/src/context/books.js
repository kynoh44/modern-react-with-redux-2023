import { createContext, useState } from 'react';

const BookContext = createContext();

/* Use Context for shared data which is(are) the application state(s) */

function Provider({ children }) {
	const [books, setBooks] = useState([]);
	
	const fetchBooks = async () => {
		const response = await axios.get("http://localhost:3001/books");

		setBooks(response.data);
	};
	
	return(
		<BookContext.Provider value={{/* The Single Object for sharing */}}>
			{children}
		</BookContext.Provider>
	);
}

export default BookContext;
export { Provider };