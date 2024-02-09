import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

const songsSlice = createSlice({
	name: 'song',
	initialState: [],
	reducers: {
		addSong(state, action) {
			state.push(action.payload);
		},
		removeSong(state, action) {
			// action.payload === string (the song we want to remove)
			const index = state.indexOf(action.payload);
			state.splice(index, 1);
		},
	},
	extraReducers(builder) {
		builder.addCase(reset, (state, action) => {
			return [];
		});
	},
});

const store = configureStore({
	reducer: {
		songs: songsSlice.reducer,
		movies: moviesSlice.reducer,
	},
});

const startingState = store.getState();
console.log(startingState);
console.log(JSON.stringify(startingState));

//store.dispatch(
//	songsSlice.actions.addSong("New song!"),
//);

//const finalState = store.getState();
//console.log(JSON.stringify(finalState));

//console.log(songsSlice.actions);
//console.log(songsSlice.actions.addSong());
//console.log(songsSlice.actions.addSong('Love Story'));

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;

//console.log(moviesSlice.actions);
//console.log(moviesSlice.actions.reset);
//console.log(moviesSlice.actions.reset.toString());
