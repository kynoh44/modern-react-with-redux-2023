import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
	name: 'song',
	initialState: [],
	reducers: {
		// 'song' + '/' + 'addSong' = 'song/addSong'
		addSong(state, action) {
			/*
				<state> is not the big state object in <store>
				<store> is a piece of state managed by this reducer
			*/
			state.push(action.payload);
		},
		// 'song' + '/' + 'removeSong' = 'song/removeSong'
		removeSong(state, action) {
			//
		},
	},
});

const store = configureStore({
	reducer: {
		songs: songsSlice.reducer
	},
});

////console.log(songsSlice.actions.addSong("Some song!"));

//const startingState = store.getState();
//console.log(JSON.stringify(startingState));

////store.dispatch({
////	type: 'song/addSong',
////	payload: 'new Song!',
////});

//store.dispatch(
//	songsSlice.actions.addSong("Love Story")
//);


//const finalState = store.getState();
//console.log(JSON.stringify(finalState));

export { store };
