import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
	const [expandedIndex, setExpandedIndex] = useState(1);

	const handleClick = (nextIndex) => {
		setExpandedIndex(nextIndex);		//	index is not defined! then how to define? Hybrid!
	};

	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;

		const icon = <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>;

		return(
			<div key={item.id}>
				<div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
				{item.label}
				{icon}
				</div>
				<div>{isExpanded && <div className="border-b p-5">{item.content}</div>}</div>
			</div>
		);
	});

	return(
		<div className="border-x border-t rounded">{renderedItems}</div>
	);
}

export default Accordion;