import BookEdit from "./BookEdit";
import { useState } from "react";

function BookShow({ book, onDelete, onEdit }) {
	const [showEdit, setShowEdit] = useState(false);
	
	const handleDelete = () => {
		onDelete(book.id);
	};

	const handleEdit = () => {
		setShowEdit(!showEdit);
		console.log("clicked edit button");
		console.log("id is not identified");
		console.log(book.id);
	};

	const handleSubmit = (id, newTitle) => {
		console.log(id, newTitle, "id is identified and passed when user submitted");
		setShowEdit(false);
		onEdit(id, newTitle);
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