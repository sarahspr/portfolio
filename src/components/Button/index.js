import React from "react";

const Button = (props) => {
	let btnLink = props.btnLink;
	let btnText = props.btnText;
	let className = props.className;

	if (!className.length > 0) {
		className = "";
	}

	return (
		<>
			<a href={btnLink} className={className} role="button">
				{btnText}
			</a>
		</>
	);
};
export default Button;
