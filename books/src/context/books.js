import { createContext, useState } from "react";

const BookContext = createContext();

function Provider({ children }) {
	const [books, setBooks] = useState([]);	// Application State

	const fetchBooks = async () => {
		const response = await axios.get("http://localhost:3001/books");
		setBooks(response.data);
	};

	return(
		<BookContext.Provider value={{}}>
			{children}
		</BookContext.Provider>
	);
}

export default BookContext;
export { Provider };