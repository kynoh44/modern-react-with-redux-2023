import React from	'react';
import ReactDOM from 'react-dom/client';

/* 4) Import the component file */
import MyApp from './App';	// Renamed variable

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

/* 5) Use the component */
<MyApp />

root.render(<MyApp />);