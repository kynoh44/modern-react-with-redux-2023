import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
	name: 'cars',
	initialState: {
		searchTerm: '',
		cars: [],	// { id, name, cost } will be an element of <cars> array
	},
	reducers: {
		changeSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},
		addCar(state, action) {
			// action.payload === { name: 'ab', cost: 33 }
			state.cars.push({
				name: action.payload.name,
				cost: action.payload.cost,
				id: nanoid(),
			});
		},
		removeCar(state, action) {
			// action.payload === the id of the car we wanna remove
			const updated = state.cars.filter((car) => {
				return car.id !== action.payload
			});
			state.cars = updated;
		},
	},
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
