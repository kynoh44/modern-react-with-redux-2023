import { useState, useContext } from 'react';
import BookEdit from './BookEdit';
import BookContext from '../context/books';

function BookShow({ book }) {
	const [showEdit, setShowEdit] = useState(false);	// Component State
	const { deleteBookById } = useContext(BookContext);

	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};

	const handleSubmit = () => {
		setShowEdit(!showEdit);
	};

	const handleDelete = () => {
		deleteBookById(book.id);
	};

	let content = <h3>{book.title}</h3>;
	if(showEdit) { content = <BookEdit book={book} onEditSubmit={handleSubmit} />; };

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