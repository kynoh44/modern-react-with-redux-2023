function ProfileCard({ title, handle }) {	// Argument Destructuring
	//const { title, handle } = props;	// Destructuring

	return (
		<div>
			<div>Title is { title }</div>
			<div>Handle is { handle }</div>
		</div>
	);
}

export default ProfileCard;