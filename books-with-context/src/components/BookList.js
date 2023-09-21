import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList({ books, onDelete, onEdit }) {
	const renderedBook = books.map((book) => {
		return(<BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>);
	});

	return(
		<div className="book-list">
			{renderedBook}
		</div>
	);
}

export default BookList;