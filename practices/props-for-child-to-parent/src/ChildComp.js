function ChildComp({ eventObj }) {
	let fromChild = 0;
	console.log("This is First rendering.", fromChild);
	const childEventHandler = () => {
		fromChild++;
		console.log("Click Occured! This log is in Child~", fromChild);
		eventObj(fromChild);
	};

	return (
		<div>
			<button onClick={childEventHandler}>
				Child button, Click then event data will be passed into Parent |
				fromChild
			</button>
		</div>
	);
}
export default ChildComp;