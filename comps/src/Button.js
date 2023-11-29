import className from "classnames";	//	classNames, classname are available

const finalClassName = className("px3", "py-1.5", "bg-blue-500");
console.log(finalClassName);	//	px3 py-1.5 bg-blue-500

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
		<button className={finalClassName}>{children}</button>
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