import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import "./css/App.css";

function App() {
	const [images, setImages] = useState([]);
	
	const handleSubmit = async (term) => {
		const result = await searchImages(term);
		setImages(result);
	};

	return(
		<div>
			<section className="section-bar">
				<SearchBar onSubmit={handleSubmit}/>
			</section>
			<section className="section-list">
				<ImageList images={images} />
			</section>
		</div>
	);
}

export default App;