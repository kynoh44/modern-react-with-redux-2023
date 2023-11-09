import { createContext, useState } from "react";

const BookContext = createContext();

const [count, setCount] = useState();

const valueToShare = {
	count,
	incrementCount: () => {
		setCount(count + 1);
	}
};

export default BookContext;