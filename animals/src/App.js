//import { useState } from "react"
import { useState } from './useState';

function App() {
	const stateConfig = useState(0);
	const stateVar = stateConfig.state;
	const setterFunc = stateConfig.setterFunction;

	console.log(stateVar);
	console.log(setterFunc);

	return ;
}

export default App;