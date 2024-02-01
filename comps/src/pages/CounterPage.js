import { useReducer } from 'react';
import Button from '../components/Button'
import Panel from '../components/Panel';

const reducer = (state, action) => {
	if (action.type === 'increment-count') {
		return {
			...state,
			count: state.count + 1,
		};
	} else if (action.type === 'decrement-count') {
		return {
			...state,
			count: state.count - 1,
		}
	} else if (action.type === 'set-value') {
		return {
			...state,
			valueToAdd: action.payload,
		}
	} else if (action.type === 'add-value') {
		return {
			count: action.payload,
			valueToAdd: 0,
		}
	}

	return state;
};

function CounterPage({ initialCount }) {
	//const [count, setCount] = useState(initialCount);
	//const [valueToAdd, setValueToAdd] = useState(0);
	const [state, dispatch] = useReducer(reducer, {
		count: initialCount,
		valueToAdd: 0,
	});

	console.log(state);

	const increment = () => {
		dispatch({
			type: 'increment-count',
			payload: state.count,
		});
	};

	const decrement = () => {
		dispatch({
			type: 'decrement-count',
			payload: state.count,
		});
	};

	const handleChange = (event) => {
		const value = parseInt(event.target.value) || 0;

		dispatch({
			type: 'set-value',
			payload: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		//setCount(count + valueToAdd);
		dispatch({
			type: 'add-value',
			payload: state.count + state.valueToAdd,
		})
	};

	return (
		<Panel className="m-3">
			<h1 className="text-lg">Count is {state.count}</h1>
			<div className="flex flex-row">
			<Button onClick={increment}>Increment</Button>
			<Button onClick={decrement}>Decrement</Button>
			</div>
			<form onSubmit={handleSubmit}>
				<label>Add a lot!</label>
				<input
					value={state.valueToAdd || ""}
					onChange={handleChange}
					type="number"
					className="p-1 m-3 bg-gray-50 border border-gray-300"
				/>
				<Button>Add it!</Button>
			</form>
		</Panel>
	);
}

export default CounterPage;
