import { useState } from 'react';
import BookEdit from './BookEdit'

function BookShow({ book }) {
	const [showEdit, setShowEdit] = useState(false);

	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};

	let content = <h3>{book.title}</h3>;
	if(showEdit) { content = <BookEdit book={book} />; };

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