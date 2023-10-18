import BookEdit from "./BookEdit";
import { useState, useContext } from "react";
import BookContext from "../context/books";

function BookShow({ book }) {
	const [showEdit, setShowEdit] = useState(false);
	const { deleteBook } = useContext(BookContext);
	
	const handleDelete = () => {
		deleteBook(book.id);
	};

	const handleEdit = () => {
		setShowEdit(!showEdit);
	};

	const handleSubmit = () => {
		setShowEdit(false);;
	}

	let content = <h3>{book.title}</h3>;
	if (showEdit) {
		content = <BookEdit book={book} onEditSubmit={handleSubmit}/>;
	}

	return(
		<div className="book-show">
			<img alt={book.title} src= {`https://picsum.photos/seed/${book.id}/300/200`} />
			<div>{content}</div>
			<div className="actions">
				<button className="edit" onClick={handleEdit}>Edit</button>
				<button className="delete" onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
}

export default BookShow;