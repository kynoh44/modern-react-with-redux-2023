import BookShow from "./BookShow";
import BookContext from "../context/books";
import { useContext } from "react";

function BookList({ books, onEdit, onDelete }) {
	const value = useContext(BookContext);

	const renderedBooks = books.map((book) => {
		return <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />;
	});

	return(
		<div className='book-list'>
			{value}
			{renderedBooks}
		</div>
	);
}

export default BookList;