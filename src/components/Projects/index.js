import React from "react";

//Components
import ProjectCard from "../ProjectCard";

//Images
import buckeye from "../../images/buckeye.png";
import braxos from "../../images/braxos.png";
import easton from "../../images/easton.png";
import dlz from "../../images/dlz.png";
import nice from "../../images/nice.png";
import travero from "../../images/travero.png";
import alexandraHan from "../../images/alexandra-han.png";
import portfolio from "../../images/portfolio.png";

const Projects = () => {
	return (
		<>
			<section id="projects" className="projects section">
				<h2>Projects I've been a part of...</h2>
				<div className="projects__wrapper">
					<ProjectCard
						href="https://nice.com/"
						imgSrc={nice}
						title="NICE"
						technology="HTML5, CSS3, SASS, Handlebars.js, JavaScript, jQuery"
					/>
					<ProjectCard
						href="https://travero.com"
						imgSrc={travero}
						title="Travero"
						technology="HTML5, CSS3, SASS, Handlebars.js, JavaScript, jQuery"
					/>
					<ProjectCard
						href="https://eastontowncenter.com/"
						imgSrc={easton}
						title="Easton Town Center"
						technology="HTML5, CSS3, SASS, Bootstrap, jQuery, PHP, WordPress"
					/>
					<ProjectCard
						href="https://dlz.com/"
						imgSrc={dlz}
						title="DLZ"
						technology="HTML5, CSS3, SASS, Bootstrap, jQuery, PHP, WordPress"
					/>
					<ProjectCard
						href="https://buckeyeinnovation.com/"
						imgSrc={buckeye}
						title="Buckeye Innovation"
						technology="HTML5, CSS3, SASS, Bootstrap, jQuery, PHP, WordPress"
					/>
					<ProjectCard
						href="https://braxos.com/"
						imgSrc={braxos}
						title="braXos"
						technology="HTML5, CSS3, SASS, Bootstrap, jQuery, PHP, WordPress"
					/>
				</div>

				<h2>Solo Projects</h2>

				<div className="projects__wrapper">
					<ProjectCard
						href="https://alexandrahan.com/"
						imgSrc={alexandraHan}
						title="Alexandra Han"
						technology="HTML5, CSS3, SASS, Bootstrap, jQuery, PHP, WordPres"
					/>
					<ProjectCard
						href="/"
						imgSrc={portfolio}
						title="Portfolio"
						technology="HTML5, CSS3, SASS, React"
					/>
				</div>
			</section>
		</>
	);
};

export default Projects;
