import ProfileCard from './ProfileCard';

/* Create props variable and test 1 */

const custStyle = {
	backgroundColor: "black",
	color: "gold"
}

function App() {
	return (
		<div>
			<div>Personal Digital Assistants</div>

			<ProfileCard
				backgroundColor= { custStyle.backgroundColor }
				color= {custStyle.color} />
			<ProfileCard color= "blue"/>
			<ProfileCard color= "gold"/>
		</div>
	);
}

export default App;

