import { useState } from "react";

function Dropdown({ options, selection, onSelect }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((currentIsOpen) => !currentIsOpen);
	};

	const handleOptionClick = (option) => {
		setIsOpen(!isOpen);	// Clocse dropdown
		onSelect(option);
	};

	const renderedOptions = options.map((option) => {
		return(
			<div onClick={() => handleOptionClick(option)} key={option.value}>
				{option.label}
			</div>
		);
	});

	let content = "Select...";
	if(selection) {
		content = selection.label;
	}

	return(
		<div>
			<div onClick={handleClick}>{content}</div>
			{isOpen && <div>{renderedOptions}</div>}
		</div>
	);
}

export default Dropdown;