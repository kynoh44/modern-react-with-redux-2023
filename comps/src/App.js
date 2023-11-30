import Button from "./Button";
import { GoBell, GoCloud, GoDatabase } from "react-icons/go";

function App() {
	return(
		<div>
			<div>
				<Button success rounded outline>
					<GoBell className="mr-1" />
					Happy Hacking!
				</Button>
			</div>
			<div>
				<Button danger outline>
					<GoCloud className="mr-1" />
					Buy Now
				</Button>
			</div>
			<div>
				<Button warning>
					<GoDatabase className="mr-1" />
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