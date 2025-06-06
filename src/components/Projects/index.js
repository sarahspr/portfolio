import React from "react";

//Components
import ProjectCard from "../ProjectCard";

//Images
import braxos from "../../images/braxos.png";
import easton from "../../images/easton.png";
import dlz from "../../images/dlz.png";
import nice from "../../images/nice.png";
import travero from "../../images/travero.png";
import alexandraHan from "../../images/alexandra-han.png";
import portfolio from "../../images/portfolio.png";
import adcetrispro from "../../images/adcetris-pro.png";
import ib6 from "../../images/ib6.png";
import gkelite from "../../images/gkelite.png";
import ashuWedsSarah from "../../images/ashu-weds-sarah.png";
import curtis from "../../images/curtis.png";
import tukysa from "../../images/tukysa.png";

const Projects = () => {
	return (
		<section id="projects" className="projects section">
			<h2>Projects I've been a part of...</h2>
			<div className="projects__wrapper container">
				<ProjectCard
					href="https://curtisresteq.com/"
					imgSrc={curtis}
					title="Curtis Restaurant Equipment"
					technology="React, Next.js, TypeScript, TailwindCSS, Medusa.js"
				/>
				<ProjectCard
					href="https://ib6andcancer.com/"
					imgSrc={ib6}
					title="IB6 & Cancer"
					technology="React, Next.js, TypeScript, TailwindCSS, Sitecore"
				/>
				<ProjectCard
					href="https://adcetrispro.com/"
					imgSrc={adcetrispro}
					title="AdcetrisPro"
					technology="React, Next.js, TypeScript, TailwindCSS, Sitecore"
				/>
				<ProjectCard
					href="https://www.tukysa.com/"
					imgSrc={tukysa}
					title="Tukysa"
					technology="React, Next.js, TypeScript, SASS, Sitecore"
				/>
				<ProjectCard
					href="https://www.gkelite.com/a/cpq/index.liquid?product=40971119427683"
					imgSrc={gkelite}
					title="GKElite"
					technology="React, Next.js, TypeScript, SASS, Shopify"
				/>
				<ProjectCard
					href="https://nice.com/"
					imgSrc={nice}
					title="NICE"
					technology="JavaScript, jQuery, Handlebars.js, SASS, Sitecore" />
				<ProjectCard
					href="https://travero.com"
					imgSrc={travero}
					title="Travero"
					technology="JavaScript, jQuery, Handlebars.js, SASS, Sitecore"
				/>
				<ProjectCard
					href="https://eastontowncenter.com/"
					imgSrc={easton}
					title="Easton Town Center"
					technology="HTML, SASS, Bootstrap, jQuery, PHP, WordPress"
				/>
			</div>

			<h2>Solo Projects</h2>

			<div className="projects__wrapper container">
				<ProjectCard
					href="https://ashuwedssarah.com/"
					imgSrc={ashuWedsSarah}
					title="Ashu Weds Sarah"
					technology="Angular, HTML, SASS, Firebase"
				/>
				<ProjectCard
					href="https://alexandrahan.com/"
					imgSrc={alexandraHan}
					title="Alexandra Han"
					technology="HTML, SASS, Bootstrap, jQuery, PHP, WordPress"
				/>
				<ProjectCard
					href="/"
					imgSrc={portfolio}
					title="Portfolio"
					technology="React, HTML, SASS, Firebase"
				/>
			</div>
		</section>
	);
};

export default Projects;
