import "../node_modules/bulma/css/bulma.css"
import mercury from "./PlanetImages/mercury.svg"
import venus from "./PlanetImages/venus.svg"
import earth from "./PlanetImages/earth.svg"
import mars from "./PlanetImages/mars.svg"
import jupiter from "./PlanetImages/jupiter.svg"
import saturn from "./PlanetImages/saturn.svg"
import uranus from "./PlanetImages/uranus.svg"
import neptune from "./PlanetImages/neptune.svg"
import starship from "./PlanetImages/starship.svg"
import { useState } from "react"
import "./Child.css"

function Child({ name }) {
	const [clicks, setClicks] = useState(0);

	const names = {
		mercury, venus, earth,
		mars, jupiter, saturn,
		uranus, neptune
	};

	return (
		<div className="planet-show"
			onClick={() => {setClicks(clicks + 1); }}>
			<img className="planet"
				src={names[name]}
				alt="Planet Image"/>
			<img className="startship"
				style={{width: 10 + 10 * clicks + "px"}}
				src={starship}
				alt="Startship Image"/>
		</div>
	);
}

export default Child;