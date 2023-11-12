import BookShow from "./BookShow";
import BookContext from "../context/books";
import { useContext } from "react";

function BookList({ books, onEdit, onDelete }) {

	const renderedBooks = books.map((book) => {
		return <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />;
	});

	return(
		<div className='book-list'>
			{renderedBooks}
		</div>
	);
}

export default BookList;