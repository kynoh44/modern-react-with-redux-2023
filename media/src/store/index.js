import { configureStore } from "@reduxjs/toolkit";
import { usersReducers } from "./usersSlice";

export const store = configureStore({
	reducer: {
		users: usersReducers
	},
});

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
