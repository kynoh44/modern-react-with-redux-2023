import { useState } from 'react';
import BookEdit from './BookEdit'

function BookShow({ book, onEdit, onDelete }) {
	const [showEdit, setShowEdit] = useState(false);

	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};

	const handleSubmit = (id, title, pages) => {
		setShowEdit(!showEdit);
		onEdit(id, title, pages);
	};

	const handleDelete = () => {
		onDelete(book.id);
		//console.log(book.id);
	};

	let content = <div><h3>{book.title}</h3><h4>{book.pages}</h4></div>;

	if(showEdit) {
		content = <BookEdit book={book} onEditSubmit={handleSubmit} />;
	};

	return(
		<div className='book-show'>
			<img alt={book.title} src={`https://picsum.photos/seed/${book.id}/200`} />
			<div>{content}</div>
			<div className='actions'>
					<button className='edit' onClick={handleEditClick}>Edit</button>
					<button className='delete' onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
}

export default BookShow;