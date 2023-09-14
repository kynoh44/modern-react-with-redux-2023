function BookShow({ book }) {
	return(
	<div>
		<img src="" alt={book.title} />
		ID = {book.id} | TITLE = {book.title}
	</div>
	);
}

export default BookShow;