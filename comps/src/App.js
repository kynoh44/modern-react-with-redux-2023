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
			<Dropdown options={options} value={selection} onChange={handleSelect} />
		</div>
	);
}

export default App;