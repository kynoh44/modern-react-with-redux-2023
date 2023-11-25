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
	}

};

export default Button;