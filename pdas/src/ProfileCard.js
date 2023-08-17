function ProfileCard({ title, handle }) {
	/* D structuring */
	//const title = props.title;
	//const handle = props.handle;

	/* Equal to above code */
	//const { title, handle } = props;

	return (
	<div>
		<div>Title is {title}</div>
		<div>Handle is {handle}</div>
	</div>
	);
}

export default ProfileCard;