import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import BookContext from './context/books';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
	<BookContext.Provider value={{count, incrementCount}}>
		<App />
	</BookContext.Provider>
);