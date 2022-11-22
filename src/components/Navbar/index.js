import React from "react";

const Navbar = () => {
	const navItemsArr = ["About", "Projects", "Resume", "Contact"];
	let navItems = [];

	navItemsArr.forEach((el) => {
		let item = el.toLowerCase();

		navItems.push(
			<li key={el} className="nav-item">
				<a href={`#${item}`}>{el}</a>
				<span className="vertical-lines"></span>
			</li>
		);
	});

	return (
		<nav className="navbar">
			{/* <div className="logo">R</div> */}
			<ul>{navItems}</ul>
		</nav>
	);
};

export default Navbar;
