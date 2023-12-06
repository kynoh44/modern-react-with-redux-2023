import { useState } from "react";

function Accordion({ items }) {
	const [expandedIndex, setExpandedIndex] = useState(0);	// First accordion section will be index 0

	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;
		console.log(isExpanded);	// true, two falses

		return(
			<div key={item.id}>
				<div>{item.label}</div>
				<div>{item.content}</div>
			</div>
		);
	});

	return(
		<div>{renderedItems}</div>
	);
}

export default Accordion;