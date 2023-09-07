import SearchBar from "./components/SearchBar";
import searchImages from "./api";

function App() {
	const handleSubmit = (term) => {
		const results = searchImages(term);
		
		console.log(results);
	};

	return(
		<div>
			<SearchBar onSubmit={handleSubmit} />
		</div>
	)
}


export default App;