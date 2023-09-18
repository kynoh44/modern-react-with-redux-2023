function BookShow({ book, onDelete }) {

	const handleClick = () => {
		onDelete(book.id);
	};

	return(
		<div>
		<button onClick={handleClick}>Delete</button>
		ID = {book.id}
		TITLE = {book.title}
		</div>
	);
}

export default BookShow;