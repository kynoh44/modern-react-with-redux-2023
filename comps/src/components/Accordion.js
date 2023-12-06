import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

function Accordion({ items }) {
	const [expandedIndex, setExpandedIndex] = useState(1);

	const handleClick = (nextIndex) => {
		setExpandedIndex(nextIndex);		//	index is not defined! then how to define? Hybrid!
	};

	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;

		const icon = <span>{isExpanded ? <GoChevronDown /> : <GoChevronRight />}</span>;

		return(
			<div key={item.id}>
				<div onClick={() => handleClick(index)}>
				{icon}
				{item.label}
				</div>
				<div>{isExpanded && <div>{item.content}</div>}</div>
			</div>
		);
	});

	return(
		<div>{renderedItems}</div>
	);
}

export default Accordion;