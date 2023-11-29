function Button({
	children,
	primary,
	secondary,
	success,
	warning,
	danger,
	outline,
	rounded
}) {
	let baseClassName = 'px-3 py-1.5 border';
	if(primary) {
		baseClassName += " border-blue-600 bg-blue-500 text-white";
	} else if(secondary) {
		baseClassName += " border-green-600 bg-green-500 text-white";
	}

	return(
		<button className={baseClassName}>{children}</button>
	);
}

Button.propTypes = {
	validateStandard: ({ primary, secondary, success, warning, danger }) => {
		const count = Number(!!primary)
			+ Number(!!secondary)
			+ Number(!!success)
			+ Number(!!warning)
			+ Number(!!danger)
		if (count > 1) {
			return new Error("Only one of primary, secondary, success, warning, danger can be true");
		}
	}
};
export default Button;