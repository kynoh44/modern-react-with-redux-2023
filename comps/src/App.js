import Button from "./Button";

function App() {
	return(
		<div>
			<div>
				<Button primary success rounded outline>Happy Hacking!</Button>
			</div>
			<div>
				<Button danger outline>Buy Now</Button>
			</div>
			<div>
				<Button warning>Sell Now</Button>
			</div>
			<div>
				<Button secondary outline >Report</Button>
			</div>
			<div>
				<Button secondary rounded >Cancel</Button>
			</div>
		</div>
	);
}

export default App;