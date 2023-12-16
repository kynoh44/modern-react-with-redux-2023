import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
	const [isOpen, setIsOpen] = useState(false);
	const divEl = useRef();	// Division element

	useEffect(() => {
		const handler = (event) => {
			if (!divEl.current) {
				return;
			}

			if (!divEl.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("click", handler, true);

		return () => {	// cleanUp function
			document.removeEventListener("click", handler);
		};
	}, []);

	const handleClick = () => {
		setIsOpen((currentIsOpen) => !currentIsOpen);
	};

	//console.log("Drop down Component rendered at Time 1: ", window.timeTwo = performance.now());
	const handleOptionClick = (option) => {
		//console.log("User-defined event handler occured at Time 3 : ", window.timeOne = performance.now());
		setIsOpen(!isOpen);	// Clocse dropdown
		onChange(option);
	};

	const renderedOptions = options.map((option) => {
		return(
			<div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>
				{option.label}
			</div>
		);
	});

	return(
		<div ref={divEl} className="w-48 relative">
			<Panel
				className="flex justify-between items-center cursor-pointer"
				onClick={handleClick}
			>
				{value?.label || "Select..."}
				<GoChevronDown className="text-lg" />
			</Panel>
			{isOpen && (
				<Panel className="absolute top-full">{renderedOptions}</Panel>
			)}
		</div>
	);
}

export default Dropdown;