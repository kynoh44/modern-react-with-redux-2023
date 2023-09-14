import { useState } from 'react';

function App() {
	const [obj, setObj] = useState(
		{ id: 0, val: 1, type: "int", alias: "i" }
	);
	
	const removeType = () => {
		/* 삭제할 prop을 제외한 object 생성 by Object Destructuring */
		const { type, ...rest } = obj;	// type과 나머지를 합친게 위에 초기화한 obj라는 의미
		setObj(rest);
		console.log(rest);
	};

	return(
		<div>
			<p>Remove Type!</p>
			<button onClick={removeType}>Remove!</button>
		</div>
	);
}

export default App;