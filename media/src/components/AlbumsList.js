import { useFetchAlbumsQuery } from "../store";

function AlbumsList({ user }) {
	const resultObject = useFetchAlbumsQuery(user);

	console.log(resultObject);

	return (
		<div>
			Albums for {user.name}
		</div>
	);
}

export default AlbumsList;
