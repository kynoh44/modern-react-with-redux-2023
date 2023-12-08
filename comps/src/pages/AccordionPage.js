import Accordion from "../components/Accordion";


function AccordionPage() {
	const items = [
		{
			id: "12jkf",
			label: "Can I use React on a project?",
			content: "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want."
		},
		{
			id: "122jk24f",
			label: "Can I use JavaScript on a project?",
			content: "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want."
		},
		{
			id: "56hgfr",
			label: "Can I use CSS on a project?",
			content: "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want."
		},
	];

	return <Accordion items={items} />;
}

export default AccordionPage;