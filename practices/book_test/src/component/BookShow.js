import BookEdit from "./BookEdit";
import { useState } from "react";

function BookShow({ book, onDelete, onEdit }) {
	const [showEdit, setShowEdit] = useState(false);
	
	const handleDelete = () => {
		onDelete(book.id);
	};

	const handleEdit = () => {
		setShowEdit(!showEdit);
	};

	let content = <h3>{book.title}</h3>;
	if (showEdit) {
		content = <BookEdit book={book} onEdit={onEdit} closeEdit={handleEdit}/>;
	}

	return(
		<div>
			{content}
			<button onClick={handleDelete}>Delete</button>
			<button onClick={handleEdit}>Edit</button>
		</div>
	);
}

export default BookShow;