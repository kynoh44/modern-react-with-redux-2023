import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
	name: 'song',
	initialState: [],
	reducers: {
		addSong(state, action) {
			state.push(action.payload);
		},
		removeSong(state, action) {
			//
		},
	},
});

const store = configureStore({
	reducer: {
		songs: songsSlice.reducer,
	},
});

const startingState = store.getState();
console.log(startingState);
console.log(JSON.stringify(startingState));

store.dispatch(
	songsSlice.actions.addSong("New song!"),
);

const finalState = store.getState();
console.log(JSON.stringify(finalState));

console.log(songsSlice.actions);
console.log(songsSlice.actions.addSong());
console.log(songsSlice.actions.addSong('Love Story'));

export { store };
