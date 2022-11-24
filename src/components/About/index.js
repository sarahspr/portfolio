import React from "react";

import chalkLineFuschia from "../../images/chalk-line-fuschia.svg";

const About = () => {
	return (
		<>
			<section id="about" className="about section">
				<h2>About</h2>
				<div className="about__container container">
					<div className="about__column column">
						<p>
							I am an innovative and collaborate self-taught front-end developer
							with 3+ years of development experience. I have worked in
							fast-paced agencies building custom, response, and accessible
							web-based applications for 20+ clients utilizing various front-end
							technologies. Additionally I have lead 7+ WordPress site builds.
							Besides development, I have recently written documentation
							outlining coding standards for front-end developers along with
							documentation regarding web accessibility standards and their
							importance.
						</p>
					</div>
					<div className="about__column column">
						<p>
							Prior to my role as a front-end developer, I earned my M.Ed. in
							ESOL (English for Speakers of Other Languages) and spent 2 years
							as an ESL teacher. Having this unique background in education
							allows me to serve as a teacher and mentor for other developers.
						</p>
					</div>
				</div>
				<div
					className="about__chalk-border-fuschia"
					style={{
						backgroundImage: `url(${chalkLineFuschia})`,
					}}
				></div>
			</section>
		</>
	);
};

export default About;
