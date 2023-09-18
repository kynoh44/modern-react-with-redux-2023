import BookShow from "./BookShow";

function BookList({ books, onDelete }) {
	const renderedBooks = books.map((book) => {
		return(<BookShow key={book.id} book={book} onDelete={onDelete}/>)
	});

	console.log(renderedBooks);

	return(
		<div>
			{renderedBooks}
		</div>
	);
}

export default BookList;