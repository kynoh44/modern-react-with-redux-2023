function useState(defaultValue)
{
	const ret = {
		state: defaultValue,
		setterFunction: () => {}
	};
	return [ret.state, ret.setterFunction];
}

export { useState };