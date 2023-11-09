import { createContext, useState } from "react";

const BookContext = createContext();

const [count, setCount] = useState(0);

const valueToShare = {
	count,
	incrementCount: () => {
		setCount(count + 1);
	}
};

export default BookContext;