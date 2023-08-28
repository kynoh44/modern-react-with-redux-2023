import ProfileCard from './ProfileCard';

const custProps = "Test2";

function App() {
	return (
		<div>
			<div>Personal Digital Assistants</div>
			<h1>{ custProps }</h1>
			<ProfileCard test= "red"/>
		</div>
	);
}

export default App;

