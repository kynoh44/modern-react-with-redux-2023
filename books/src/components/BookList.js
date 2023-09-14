import BookShow from "./BookShow";

function BookList({ books }) {
	const renderedBook = books.map((book) => {
		return(<BookShow book={book} />);
	});

	return(
		<div>
			Booklist
			{renderedBook}
		</div>
	);
}

export default BookList;