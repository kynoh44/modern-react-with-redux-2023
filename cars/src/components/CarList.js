import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
	const dispatch = useDispatch();

	const { cars, name } = useSelector(({ cars: { data, searchTerm }, form }) => {
		// Filtering Logic
		const filteredCars = data.filter((car) =>
			car.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

		return {
			cars: filteredCars,
			name: form.name,
		};
	});

	const handleCarDelete = (car) => {
		dispatch(removeCar(car.id));
	};

	const renderedCars = cars.map((car) => {
		// Decide if this car shoulde be bold
		// Access to <state.form.name>
		const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

		return (
			<div key={car.id} className={`panel ${bold && 'bold'}`}>
				<p>
					{car.name} - ${car.cost}
				</p>
				<button
					className="button is-danger"
					onClick={() => handleCarDelete(car)}
				>
					Delete
				</button>
			</div>
		);
	});

	return (
		<div className="car-list">
			{renderedCars}
			<hr />
		</div>
	);
}

export default CarList;
