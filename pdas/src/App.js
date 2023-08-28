import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

console.log(AlexaImage);
console.log(SiriImage);

function App() {
	return (		
		<div>
			<img src= { AlexaImage } alt= "Alexa Image" />
			<img src= { SiriImage } alt= "Siri Image" />
			<img src= "/static/media/siri.e6a70a555204b3a1f6f0.png" alt= "Siri by fileName" />

			<div>Personal Digital Assistants</div>

			<ProfileCard title = "Alexa" handle = "@alexa99" />
			<ProfileCard title = "Cortana" handle = "@cortana32" />
			<ProfileCard title = "Siri" handle = "@siri01" />
		</div>
	);
}

export default App;