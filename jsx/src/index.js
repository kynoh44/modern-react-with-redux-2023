import React from	'react';
import ReactDOM from 'react-dom/client';

/* 4) Import the component file */
//import MyApp from './App';	// Renamed variable
import MyApp, { message } from './App';	// Import named exports

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

//function Named() {
//	return <h1>{ message }</h1>;
//}

/* 5) Use the component */
<MyApp />

root.render(<MyApp />);
//root.render(<Named />);