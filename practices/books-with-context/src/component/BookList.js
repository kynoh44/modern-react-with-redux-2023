import BookShow from "./BookShow";
import { useContext } from "react";
import BookContext from "../context/books";

function BookList({ books, onDelete, onEdit }) {
	const renderedBooks = books.map((book) => {
		return(<BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />)
	});

	const { count, incrementCount } = useContext(BookContext);

	return(
		<div className="book-list">
			{count}
			<button onClick={incrementCount}>Click the shared data</button>
			{renderedBooks}
		</div>
	);
}

export default BookList;