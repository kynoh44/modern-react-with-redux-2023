import PropTypes from "prop-types";	// If you want to use this Library, import it!

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

export default Button;