import React from "react";

import chalkLineFuschia from "../../images/chalk-line-fuschia.svg";
import resumeScreenshot from "../../images/resume-screenshot.png";

const Resume = () => {
	let resumeLink =
		"https://drive.google.com/file/d/1K3-VpoS8RjTvEtr-W5_ZvJwcs6lMkuQs/view?usp=sharing";

	return (
		<>
			<section id="resume" className="resume section">
				<div
					className="resume__chalk-border-fuschia"
					style={{
						backgroundImage: `url(${chalkLineFuschia})`,
					}}
				></div>
				<div className="column resume__column resume__content-column">
					<h3>Like what you see so far?</h3>
					<span className="resume__subheading-wrapper">
						<span className="resume__subheading-wrapper__subheading">
							Take a peek at the rest
						</span>
						<span className="resume__subheading-wrapper__eyes">👀</span>
					</span>
				</div>
				<a
					href={resumeLink}
					className="column resume__column resume__screenshot-column"
				>
					<div className="resume__screenshot-img-wrapper">
						<img src={resumeScreenshot} alt="large screenshot of my resume" />
					</div>
				</a>
			</section>
		</>
	);
};

export default Resume;
