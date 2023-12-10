import { useState } from "react";

function Dropdown({ options, value, onChange }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((currentIsOpen) => !currentIsOpen);
	};

	const handleOptionClick = (option) => {
		setIsOpen(!isOpen);	// Clocse dropdown
		onChange(option);
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
			<div onClick={handleClick}>{value?.label || "Select..."}</div>
			{isOpen && <div>{renderedOptions}</div>}
		</div>
	);
}

export default Dropdown;