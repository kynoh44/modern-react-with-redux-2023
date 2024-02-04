import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { removeSong, removeMovie } from "./store";

export default function App() {
	const dispatch = useDispatch();

	const moviePlaylist = useSelector((state) => {
		return state.movies;
	});
	const songPlaylist = useSelector((state) => {
		return state.songs;
	});

	//console.log(moviePlaylist.length, songPlaylist.length);

	const handleResetClick = () => {
		for (let i = 0; i < moviePlaylist.length + songPlaylist.length; i++) {
			if (moviePlaylist.length !== 0) {
				dispatch(removeMovie(moviePlaylist[i]));
			}
			if (songPlaylist.length !== 0) {
				dispatch(removeSong(songPlaylist[i]));
			}
		}
	};

	return (
		<div className="container is-fluid">
			<button onClick={() => handleResetClick()} className="button is-danger">
				Reset Both Playlists
			</button>
			<hr />
			<MoviePlaylist />
			<hr />
			<SongPlaylist />
		</div>
	);
}
