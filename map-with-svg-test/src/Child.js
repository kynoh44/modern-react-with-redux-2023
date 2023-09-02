import "../node_modules/bulma/css/bulma.css"
import mercury from "./PlanetImages/mercury.png"
import venus from "./PlanetImages/venus.png"
import earth from "./PlanetImages/earth.png"
import mars from "./PlanetImages/mars.png"
import jupiter from "./PlanetImages/jupiter.png"
import saturn from "./PlanetImages/saturn.png"
import uranus from "./PlanetImages/uranus.png"
import neptune from "./PlanetImages/neptune.png"

function Child({ name }) {
	const names = [ mercury, venus, earth, mars, jupiter, saturn, uranus, neptune ];
	let planet;

	for (let idx = 0;idx < names.length; idx++) {
		if (names[idx].match(name)) {
			planet = names[idx];
			//console.log(planet);
			//console.log(names[idx]);
		}
	}	
	
	return (
		<div>
			<section>
				<figure>
					<img className="has-ratio"
					width="170"
					height="170"
					src={planet}
					alt="Planet Image"/>
				</figure>
			</section>
			<div>
				{name}
			</div>
		</div>
	);
}

export default Child;