import { useState } from "react";

function Accordion({ items }) {
	const [expandedIndex, setExpandedIndex] = useState(1);

	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;

		const handleClick = () => {
			setExpandedIndex(index);
		};

		return(
			<div key={item.id}>
				<div onClick={handleClick}>{item.label}</div>
				<div>{isExpanded && <div>{item.content}</div>}</div>
			</div>
		);
	});

	return(
		<div>{renderedItems}</div>
	);
}

export default Accordion;