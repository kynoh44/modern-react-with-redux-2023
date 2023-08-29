function TestMe() {
	const tester = () => {
		return "This is test by reference";
	}

	//return console.log(tester);
	return console.log(tester());
}

export default TestMe;