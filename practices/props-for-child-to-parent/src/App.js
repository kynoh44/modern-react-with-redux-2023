import ChildComp from "./ChildComp";

function App() {
	const parentEventHandler = (fromChild) => {
		console.log("This is a log in Parent!", fromChild);
	};

	return (
		<div>
			<ChildComp eventObj={parentEventHandler} />
		</div>
	);
}

export default App;