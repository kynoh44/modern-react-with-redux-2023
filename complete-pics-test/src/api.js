import axios from "axios";

const searchImages = async (term) => {
	const response = await axios.get("https://api.unsplash.com/search/photos",
		{
			headers: { Authorization: "Client-ID wa1M8FE9yVnYaAPnBjJ9znjIFOVz78cjIP0r73RNV7s" },
			params: { query: term }
		});

	return response.data.results;
};

export default searchImages;

/* 
	#	Location							|	https://api.unsplash.com/
	# Search photos					|	GET /search/photos
	# Public Authentication	|	Authorization: Client-ID YOUR_ACCESS_KEY
	#	Parameter							|	query:
*/