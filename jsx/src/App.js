/* 1) Create a component */
//App.js file

/* 2) Make a component with returning JSX */

let message = "MyApp";

function App() {
	return(
	<div>
		<h1>Bye there!</h1>
		<p>{ message }</p>
	</div>
	);
}

/* 3) Export the component at the bottom */
export default App;
export { message };