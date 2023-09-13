import { useState } from "react";

export default function CreateBooks({ onCreate }) {
	const [usrInput, setUsrInput] = useState("");

	const handleFormSubmit = (event) => {
		event.preventDefault();
		onCreate(usrInput);
		setUsrInput("");
	};

	const handleChange = (event) => {
		setUsrInput(event.target.value);
	};


	return(
		<div>
			<form onSubmit={handleFormSubmit}>
				<input onChange={handleChange}></input>
				<button>Submit</button>
			</form>
		</div>
	); 
}