import { useState } from "react"

function getRandomAnimal() {
	const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
	return(animals[Math.floor(Math.random() * animals.length)]);
}

function App() {
	const [animals, getRandomAnimal] = useState();

	const handleClick = () => {
		getRandomAnimal(animals);
	};
	
	return(
		<div>
			<button onClick={handleClick}>Add Animals</button>

		</div>
	);
}

export default App;