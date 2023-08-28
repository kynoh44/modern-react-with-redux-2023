function ProfileCard({ title, handle, image }) {
	return (
		<div>
			<img src={image} />
			<div>Title is {title}</div>
			<div>Handle is {handle}</div>
		</div>
	);
}

export default ProfileCard;