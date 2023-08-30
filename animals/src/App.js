//import { useState } from "react"
import { useState } from './useState';

function App() {
	const [stateVar, setterFunc] = useState(10);
	
	console.log(stateVar);
	console.log(setterFunc);

	return ;
}

export default App;