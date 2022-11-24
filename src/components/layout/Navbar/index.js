import React from "react";

const Navbar = () => {
	const navItemsArr = ["About", "Projects", "Resume"];
	let navItems = [];

	navItemsArr.forEach((el) => {
		let item = el.toLowerCase();

		navItems.push(
			<li key={el} className="site-navigation__nav-items">
				<a href={`#${item}`} className="site-navigation__nav-item-link">
					{el}
				</a>
				<span className="site-navigation__vertical-lines"></span>
			</li>
		);
	});

	return (
		<nav
			className="site-navigation"
			role="navigation"
			aria-label="Main Site Navigation"
		>
			<ul>{navItems}</ul>
		</nav>
	);
};

export default Navbar;
