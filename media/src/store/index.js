import { configureStore } from "@reduxjs/toolkit";
import { usersReducers } from "./usersSlice";

export const store = configureStore({
	reducer: {
		users: usersReducers
	},
});
