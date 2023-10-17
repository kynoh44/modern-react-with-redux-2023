import BookShow from "./BookShow";
import { useContext } from "react";
import BookContext from "../context/books";

function BookList({ books, onDelete, onEdit }) {
	const renderedBooks = books.map((book) => {
		return(<BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />)
	});

	const sharedData = useContext(BookContext);

	return(
		<div className="book-list">
			{sharedData}
			{renderedBooks}
		</div>
	);
}

export default BookList;