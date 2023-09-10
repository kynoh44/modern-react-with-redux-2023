import BookShow from "./BookShow";

function BookList({ books }) {

	//console.log(books);

	//const renderedBook = books.map((key, book) => {
	//	return(
	//		<BookShow key={books.id} book={books.title} />
	//	);
	//});

	return(
		<div>
			Booklist
			{/*{renderedBook}*/}
		</div>
	);
}

export default BookList;