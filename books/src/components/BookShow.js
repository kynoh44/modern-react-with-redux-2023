import { useState } from 'react';
import BookEdit from './BookEdit'

function BookShow({ book, onEdit }) {
	const [showEdit, setShowEdit] = useState(false);

	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};

	const handleSubmit = (id, title) => {
		setShowEdit(!showEdit);
		onEdit(id, title);
	};

	let content = <h3>{book.title}</h3>;
	if(showEdit) { content = <BookEdit book={book} onEditSubmit={handleSubmit} />; };

	return(
		<div className='book-show'>
			<div>{content}</div>
			<div className='actions'>
					<button className='edit' onClick={handleEditClick}>Edit</button>
			</div>
		</div>
	);
}

export default BookShow;