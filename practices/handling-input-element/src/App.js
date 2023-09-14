import SearchBar from "./SearchBar";

function App() {
	const handleSubmit = (term) => {
		console.log("User searched this", term);
	};
	return(
		<div>
			<SearchBar onSubmit={handleSubmit}/>
		</div>
	);
}

export default App;