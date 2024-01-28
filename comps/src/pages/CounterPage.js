import { useState, useEffect } from 'react';
import Button from '../components/Button'

function useCounter(initialCount) {
	const [count, setCount] = useState(initialCount);

	useEffect(() => {
		console.log(count);
	}, [count]);

	const handleClick = () => {
		setCount(count + 1);
	};

	return {
		count,	// 'count: count' is condesed
		handleClick,	// 'handleClick: handleClick' is condesed
	};
}

function CounterPage({ initialCount }) {
	const { count, handleClick } = useCounter(initialCount);
	return (
		<div>
			<h1>Count is {count}</h1>
			<Button onClick={handleClick}>
				Increment
			</Button>

		</div>
	);
}

export default CounterPage;