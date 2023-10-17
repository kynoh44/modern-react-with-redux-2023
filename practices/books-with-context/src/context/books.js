import { createContext, useState } from 'react';

const BookContext = createContext();

function Provider({ children }) {
	const [count, setCount] = useState(5);

	const objShared = {
		count,
		incrementCount: () => {
			setCount(count + 1);
			console.log("Shared data is clicked!");
		}
	};

	return(
		<BookContext.Provider value={objShared}>
			{children}
		</BookContext.Provider>
	);
}

export default BookContext;
export { Provider };