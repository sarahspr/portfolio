import React from "react";

//Images
import chalkLineFuschia from "../../images/chalk-line-fuschia.svg";

const About = () => {
	return (
		<>
			<section id="about" className="about section">
				<h2>About</h2>
				<div className="about__container container">
					<div className="about__column column">
						<p>
							Growing up with friends from various cultural and linguistic
							backgrounds, I fell in love with language at an early age. In
							college I pursued an undergraduate degree in Linguistics and
							studied abroad in India for a year where I spent time learning
							Hindi. I then furthered my eduation by earning an M.Ed. in
							ESOL(English for Speakers of Other Languages) and spent two years
							as an Adult ESL instructor.
						</p>
					</div>
					<div className="about__column column">
						<p>
							In 2018 I combined my love for language with my enjoyment of
							solving puzzles and took a stab at teaching myself web
							development. Since then, I have worked in fast-paced agencies
							building custom, response, and accessible web-based applications
							for 20+ clients utilizing various front end technologies.
						</p>
						<br />
						<p>
							Beyond being a developer, I'm a crocheter, dog mom of two crazy
							pups, language enthusiast, and traveler; none of which happen
							before at least 1 cup of coffee.
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
