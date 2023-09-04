import axios from 'axios';

const searchImages = async () => {
	const response = await axios.get('https://api.unsplash.com/search/photos', {
		headers: {
			Authorization: 'Client-ID wa1M8FE9yVnYaAPnBjJ9znjIFOVz78cjIP0r73RNV7s',
		},
		params: {
			query: 'cars',	// User Input
		}
	});

	console.log(response);

	return response;
};

export default searchImages;