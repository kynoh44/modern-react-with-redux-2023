import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
	name: 'cars',
	initialState: {
		searchTerm: '',
		data: [],	// { id, name, cost } will be an element of <cars> array
	},
	reducers: {
		changeSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},
		addCar(state, action) {
			// action.payload === { name: 'ab', cost: 33 }
			state.data.push({
				name: action.payload.name,
				cost: action.payload.cost,
				id: nanoid(),
			});
		},
		removeCar(state, action) {
			// action.payload === the id of the car we wanna remove
			const updated = state.data.filter((car) => {
				return car.id !== action.payload
			});
			state.data = updated;
		},
	},
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
