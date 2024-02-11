import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
	const response = await axios.get('http://localhost:3005/users');

	await pause(4000);	// DEV ONLY!!!

	return response.data;
});	// Input base type at the first argument

// DEV ONLY!!!
const pause = (duration) => {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
};

export { fetchUsers };
