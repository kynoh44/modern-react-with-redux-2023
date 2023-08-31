import { useState } from "react"
import AnimalShow from "./AnimalShow";	// Import Child Component

function getRandomAnimal() {
	const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

	return(animals[Math.floor(Math.random() * animals.length)]);
}

function App() {
	const [animals, setAnimals] = useState([]);

	const handleClick = () => {
		setAnimals([...animals, getRandomAnimal()]);
		/* Modifies the value of state variable : NOT Recommended */
		//animals.push(getRandomAnimal());
	}

	return(
		<div>
			<button onClick={handleClick}>Add Animal</button>
			<div>
				<AnimalShow type={animals}/>
			</div>
		</div>
	);
}

export default App;