function ProfileCard({ title, handle }) {
	/* Destructuring */
	//const title = props.title;
	//const handle = props.handle;

	/* Equal to above code */
	//const { title, handle } = props;

	console.log(title, handle);	// Console log

	return (
	<div>
		<div>Title is {title}</div>
		<div>Handle is {handle}</div>
	</div>
	);
}

export default ProfileCard;