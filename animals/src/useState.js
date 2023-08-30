function useState(defaultValue)
{
	return {
		state: defaultValue,
		setterFunction: () => {}
	};
}

export { useState };