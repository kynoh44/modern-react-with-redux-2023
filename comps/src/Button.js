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
	return(
		<button>{children}</button>
	);
}

Button.propTypes = {
	validateStandard: ({ primary, secondary, success, warning, danger }) => {

		/* Condition for validation */

		return new Error("Only one of primary, secondary, success, warning, danger can be true");
	}
};

export default Button;