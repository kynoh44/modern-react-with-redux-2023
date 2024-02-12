import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersReducers } from "./usersSlice";
import { albumsApi } from "./apis/albumsApi";

export const store = configureStore({
	reducer: {
		users: usersReducers,
		albums: albumsApi.reducer,
	},
});

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
