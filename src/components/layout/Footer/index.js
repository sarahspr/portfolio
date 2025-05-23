import React from "react";
import { Link } from "react-scroll";

// Images
import arrow from "../../../images/arrow.svg";

const Footer = () => {
	let linkedIn = "https://www.linkedin.com/in/sarah-jainvi-445a3431/";
	let github = "https://github.com/sarahspr";

	return (
		<section id="footer" className="footer section">
			<div className="footer__content-wrapper container">
				<nav className="footer__nav" aria-label="Footer Site Navigation">
					<ul>
						<li>
							<a
								href={linkedIn}
								target="_blank"
								rel="noreferrer"
								aria-label="Link to LinkedIn Profile"
							>
								<i className="fa-brands fa-linkedin-in"></i>
							</a>
						</li>
						<li>
							<a
								href={github}
								target="_blank"
								rel="noreferrer"
								aria-label="Link to GitHub Profile"
							>
								<i className="fa-brands fa-github"></i>
							</a>
						</li>
						<li>
							<a
								href="mailto:sarahjainvi@gmail.com"
								aria-label="Link to Send an Email"
							>
								<i className="fa-regular fa-envelope"></i>
							</a>
						</li>
					</ul>
				</nav>
				<p>
					<i className="fa-regular fa-copyright"></i>
					<span>2025 Copyright</span>
				</p>
			</div>

			<Link
				className="page-nav-wrapper"
				role="button"
				to="page-top"
				smooth="true"
				duration={500}
			>
				<img src={arrow} alt="Page up site navigation arrow" />
			</Link>
		</section>
	);
};

export default Footer;
