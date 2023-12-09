import { useState } from "react";

function Dropdown({ options }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((currentIsOpen) => !currentIsOpen);
	};

	const handleOptionClick = (option) => {
		setIsOpen(!isOpen);	// Clocse dropdown
		console.log(option);	// Option user clicked through <option> parameter
	};

	const renderedOptions = options.map((option) => {
		return(
			<div onClick={() => handleOptionClick(option)} key={option.value}>
				{option.label}
			</div>
		);
	});

	return(
		<div>
			<div onClick={handleClick}>Select...</div>
			{isOpen && <div>{renderedOptions}</div>}
		</div>
	);
}

export default Dropdown;