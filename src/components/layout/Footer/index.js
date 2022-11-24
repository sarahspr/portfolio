import React from "react";

import resume from "../../../images/resume.png";

const Footer = () => {
	let linkedIn = "https://www.linkedin.com/in/sarah-spriggs-445a3431/";
	let github = "https://github.com/sarahspr";
	let resumeLink =
		"https://drive.google.com/file/d/1K3-VpoS8RjTvEtr-W5_ZvJwcs6lMkuQs/view?usp=sharing";
	return (
		<>
			<section id="footer" className="footer section">
				<div className="footer__content-wrapper">
					<nav className="footer__nav" aria-label="Footer Site Navigation">
						<ul>
							<li>
								<a
									href={linkedIn}
									target="_blank"
									aria-label="Link to LinkedIn Profile"
								>
									<i aria-hidden="true" class="fa-brands fa-linkedin-in"></i>
								</a>
							</li>
							<li>
								<a
									href={github}
									target="_blank"
									aria-label="Link to GitHub Profile"
								>
									<i aria-hidden="true" class="fa-brands fa-github"></i>
								</a>
							</li>
							<li>
								<a
									href="mailto:sarah1591@gmail.com"
									aria-label="Link to Send an Email"
								>
									<i aria-hidden="true" class="fa-regular fa-envelope"></i>
								</a>
							</li>
							<li>
								<a href="tel:315-935-6605" aria-label="Link to Call Cell Phone">
									<i aria-hidden="true" class="fa-solid fa-phone"></i>
								</a>
							</li>
							<li className="footer__nav__resume-icon-wrapper">
								<a
									href={resumeLink}
									target="_blank"
									className="footer__nav__resume-icon"
									aria-label="Link to Resume"
								>
									<img
										src={resume}
										alt="small resume icon"
										aria-hidden="true"
									/>
								</a>
							</li>
						</ul>
					</nav>
					<p>
						<i className="fa-regular fa-copyright"></i> 2022 Copyright
					</p>
				</div>
			</section>
		</>
	);
};

export default Footer;
