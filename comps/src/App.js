import Button from "./Button";
import { GoBell, GoCloud, GoDatabase } from "react-icons/go";

function App() {
	return(
		<div>
			<div>
				<Button success rounded outline>
					<GoBell />
					Happy Hacking!
				</Button>
			</div>
			<div>
				<Button danger outline>
					<GoCloud />
					Buy Now
				</Button>
			</div>
			<div>
				<Button warning>
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