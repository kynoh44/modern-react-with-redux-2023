import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
	const [selection, setSelection] = useState(null);

	const handleSelect = (option) => {
		setSelection(option);
		//console.log("User-clicked : ", option);
	};

	const options = [
		{ label: "Red", value: "red" },
		{ label: "Green", value: "green" },
		{ label: "Blue", value: "blue" },
	];
	console.log("-------React Rerender Started-----------");
	return(
		<div className="flex">
			<a href="/dashboard">Dashboard</a>
			<Dropdown options={options} value={selection} onChange={handleSelect} />
			<Dropdown options={options} value={selection} onChange={handleSelect} />
		</div>
	);
}

export default App;