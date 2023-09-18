import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
	const renderedBooks = books.map((book) => {
		return(<BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />)
	});

	console.log(renderedBooks);

	return(
		<div>
			{renderedBooks}
		</div>
	);
}

export default BookList;