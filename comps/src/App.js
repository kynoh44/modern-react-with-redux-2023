import Button from "./Button";
import { GoBell, GoCloud, GoDatabase } from "react-icons/go";

function App() {
	const handleClick = () => {
		console.log("Clicked!");
	};

	return(
		<div>
			<div>
				<Button className="mb-5" onClick={handleClick} success rounded outline>
					<GoBell />
					Happy Hacking!
				</Button>
			</div>
			<div>
				<Button danger outline onMouseEnter={handleClick}>
					<GoCloud />
					Buy Now
				</Button>
			</div>
			<div>
				<Button onMouseLeave={handleClick} warning>
					<GoDatabase />
					Sell Now
				</Button>
			</div>
			<div>
				<Button primary outline >Report</Button>
			</div>
			<div>
				<Button secondary rounded >Cancel</Button>
			</div>
		</div>
	);
}

export default App;