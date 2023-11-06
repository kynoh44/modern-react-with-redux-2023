import { useState } from 'react';
import BookEdit from './BookEdit'

function BookShow({ book, onEdit }) {
	const [showEdit, setShowEdit] = useState(false);

	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};

	const handleSubmit = () => {
		setShowEdit(!showEdit);
	};

	let content = <h3>{book.title}</h3>;
	if(showEdit) { content = <BookEdit book={book} onEdit={onEdit} onEditSubmit={handleSubmit} />; };

	return(
		<div>
			<div>
				{content}
				<div>
					<button onClick={handleEditClick}>Edit</button>
				</div>
			</div>
		</div>
	);
}

export default BookShow;