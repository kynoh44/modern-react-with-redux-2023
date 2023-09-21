import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList({ books, onDelete, onEdit }) {
	const { count, incrementCount } = useContext(BooksContext);

	const renderedBook = books.map((book) => {
		return(<BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>);
	});

	return(
		<div className="book-list">
			{count}
			<button onClick={incrementCount}>Click</button>
			{renderedBook}
		</div>
	);
}

export default BookList;