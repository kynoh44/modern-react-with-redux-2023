import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {

	return(
	<BooksContext.Provider value={{}}>
		{children}
	</BooksContext.Provider>
	);
}

export default BooksContext;
export { Provider };