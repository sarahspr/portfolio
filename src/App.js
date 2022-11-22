import React, { useState, useEffect } from "react";
// import cn from "classnames";

//images
import "./App.scss";
import upArrow from "./images/up-arrow.png";
import downArrow from "./images/down-arrow.png";
import chalkLineGrey from "./images/chalk-line-grey.svg";
import chalkLineFuschia from "./images/chalk-line-fuschia.svg";
import avatarPinkBackground from "./images/avatar-pink-background.svg";
import buckeye from "./images/buckeye.png";
import braxos from "./images/braxos.png";
import easton from "./images/easton.png";
import dlz from "./images/dlz.png";
import nice from "./images/nice.png";
import travero from "./images/travero.png";
import alexandraHan from "./images/alexandra-han.png";
import portfolio from "./images/portfolio.png";
import resumeScreenshot from "./images/resume-screenshot.png";
import resume from "./images/resume.png";

//components
import Navbar from "./components/Navbar";

function App() {
	let buckeyeWeb = "https://buckeyeinnovation.com/";
	let braxosWeb = "https://braxos.com/";
	let eastonWeb = "https://eastontowncenter.com/";
	let dlzWeb = "https://dlz.com/";
	let niceWeb = "https://nice.com/";
	let traveroWeb = "https://travero.com";
	let alexhanWeb = "https://alexandrahan.com/";
	let portfolioWeb = "https://sarahspriggs.com/";
	let linkedIn = "https://www.linkedin.com/in/sarah-spriggs-445a3431/";
	let github = "https://github.com/sarahspr";
	let resumeLink =
		"https://drive.google.com/file/d/1K3-VpoS8RjTvEtr-W5_ZvJwcs6lMkuQs/view?usp=sharing";

	///////////// Animations to add back in later? ////////////
	// Sets up initial state for scroll

	// const [scroll, setScroll] = useState(false);

	//updates scroll state when window loads

	// window.addEventListener("load", () => {
	// 	setScroll(true);
	// });

	//Updates scroll state based on scroll position, removes event listener

	// useEffect(() => {
	// 	window.addEventListener("scroll", () => {
	// 		setScroll(window.scrollY <= 300);
	// 	});
	// 	return () => window.removeEventListener("scroll", null);
	// }, []);

	return (
		<>
			<Navbar />
			<section className="hero">
				<div className="page-nav-arrow page-nav-arrow--up">
					<img src={upArrow}></img>
				</div>
				<div className="page-nav-arrow page-nav-arrow--down">
					<img src={downArrow}></img>
				</div>
				<h1>Hey there, I'm Sarah.</h1>
				<div className="container">
					<div className="column hero__content-column">
						<div className="hero__content-column-wrapper">
							<span>
								I've been a CSS Wizard for 3+ years. Welcome to my corner of the
								internet.
							</span>
							<a href="#about" className="button-53" role="button">
								Get to know me
							</a>
						</div>
					</div>
					<div className="column hero__img-column">
						{/* <div className="img-blob-wrapper"></div> */}
						<div className="hero__img-wrapper">
							<img src={avatarPinkBackground}></img>
						</div>
					</div>
				</div>
				{/* Images to be used with the scroll state above */}
				{/* <div id="golden-img-container" className={scroll ? "animate" : ""}>
					<img id="golden" src={golden}></img>
				</div>
				<div id="wheaten-img-container" className={scroll ? "animate" : ""}>
					<img id="wheaten" src={wheaten}></img>
				</div> */}
				<div
					className="chalk-border-grey"
					style={{
						backgroundImage: `url(${chalkLineGrey})`,
					}}
				></div>
			</section>

			<section id="about" className="about">
				<h1>About</h1>
				<div className="container">
					<div className="column">
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
					<div className="column">
						<p>
							Prior to my role as a front-end developer, I earned my M.Ed. in
							ESOL (English for Speakers of Other Languages) and spent 2 years
							as an ESL teacher. Having this unique background in education
							allows me to serve as a teacher and mentor for other developers.
						</p>
					</div>
				</div>
				<div
					className="chalk-border-fuscia"
					style={{
						backgroundImage: `url(${chalkLineFuschia})`,
					}}
				></div>
			</section>

			<section className="projects-section" id="projects">
				<h2>Projects I've been a part of...</h2>
				<div className="projects-wrapper">
					<div className="project-wrapper">
						<a
							href={buckeyeWeb}
							target="_blank"
							className="project-img-wrapper"
						>
							<img
								src={buckeye}
								className="project-img"
								alt="screenshot of project image"
							/>
							<div className="project-overlay">
								<h3 className="h5 project-title">Buckeye Innovation</h3>
								<a href={buckeyeWeb} target="_blank" className="project-link">
									{buckeyeWeb}
								</a>
								<div className="project-technology">
									HTML5, CSS, SASS, Bootstrap, JavaScript, jQuery
								</div>
							</div>
						</a>
					</div>
					<div className="project-wrapper">
						<a href={braxosWeb} target="_blank" className="project-img-wrapper">
							<img
								src={braxos}
								className="project-img"
								alt="screenshot of project image"
							/>
							<div className="project-overlay">
								<h3 className="h5 project-title">braXos</h3>
								<a href={braxosWeb} target="_blank" className="project-link">
									{braxosWeb}
								</a>
								<div className="project-technology">
									HTML5, CSS, SASS, Bootstrap, JavaScript, jQuery
								</div>
							</div>
						</a>
					</div>
					<div className="project-wrapper">
						<a href={eastonWeb} target="_blank" className="project-img-wrapper">
							<img
								src={easton}
								className="project-img"
								alt="screenshot of project image"
							/>
							<div className="project-overlay">
								<h3 className="h5 project-title">Easton Town Center</h3>
								<a href={eastonWeb} target="_blank" className="project-link">
									{eastonWeb}
								</a>
								<div className="project-technology">
									HTML5, CSS, SASS, Bootstrap, JavaScript, jQuery
								</div>
							</div>
						</a>
					</div>
					<div className="project-wrapper">
						<a href={dlzWeb} target="_blank" className="project-img-wrapper">
							<img
								src={dlz}
								className="project-img"
								alt="screenshot of project image"
							/>
							<div className="project-overlay">
								<h3 className="h5 project-title">DLZ</h3>
								<a href={dlzWeb} target="_blank" className="project-link">
									{dlzWeb}
								</a>
								<div className="project-technology">
									HTML5, CSS, SASS, Bootstrap, JavaScript, jQuery
								</div>
							</div>
						</a>
					</div>
					<div className="project-wrapper">
						<a href={niceWeb} target="_blank" className="project-img-wrapper">
							<img
								src={nice}
								className="project-img"
								alt="screenshot of project image"
							/>
							<div className="project-overlay">
								<h3 className="h5 project-title">NICE</h3>
								<a href={niceWeb} target="_blank" className="project-link">
									{niceWeb}
								</a>
								<div className="project-technology">
									HTML5, CSS, SASS, Bootstrap, JavaScript, jQuery
								</div>
							</div>
						</a>
					</div>
					<div className="project-wrapper">
						<a
							href={traveroWeb}
							target="_blank"
							className="project-img-wrapper"
						>
							<img
								src={travero}
								className="project-img"
								alt="screenshot of project image"
							/>
							<div className="project-overlay">
								<h3 className="h5 project-title">Travero</h3>
								<a href={traveroWeb} target="_blank" className="project-link">
									{traveroWeb}
								</a>
								<div className="project-technology">
									HTML5, CSS, SASS, Bootstrap, JavaScript, jQuery
								</div>
							</div>
						</a>
					</div>
				</div>
				<h2>Solo Projects</h2>
				<div className="projects-wrapper">
					<div className="project-wrapper">
						<a
							href={alexhanWeb}
							target="_blank"
							className="project-img-wrapper"
						>
							<img
								src={alexandraHan}
								className="project-img"
								alt="screenshot of project image"
							/>
							<div className="project-overlay">
								<h3 className="h5 project-title">Alexandra Han</h3>
								<a href={alexhanWeb} target="_blank" className="project-link">
									{alexhanWeb}
								</a>
								<div className="project-technology">
									HTML5, CSS, SASS, Bootstrap, JavaScript, jQuery
								</div>
							</div>
						</a>
					</div>
					<div className="project-wrapper">
						<a
							href={portfolioWeb}
							target="_blank"
							className="project-img-wrapper"
						>
							<img
								src={portfolio}
								className="project-img"
								alt="screenshot image of project"
							/>
							<div className="project-overlay">
								<h3 className="h5 project-title">Portfolio</h3>
								<a href={portfolioWeb} target="_blank" className="project-link">
									{portfolioWeb}
								</a>
								<div className="project-technology">
									HTML5, CSS, SASS, Bootstrap, JavaScript, jQuery
								</div>
							</div>
						</a>
					</div>
				</div>
			</section>

			<section id="resume" className="resume-section">
				<div
					className="chalk-border-fuschia"
					style={{
						backgroundImage: `url(${chalkLineFuschia})`,
					}}
				></div>
				<div className="column content-wrapper">
					<h3>Like what you see so far?</h3>
					<span className="resume-subheading-wrapper">
						<span className="resume-subheading">Take a peek at the rest</span>
						<span className="eyes">👀</span>
					</span>
				</div>
				<a href={resumeLink} className="column resume-screenshot-wrapper">
					<div className="img-wrapper">
						<img src={resumeScreenshot} alt="large screenshot of my resume" />
					</div>
				</a>
			</section>

			<section id="contact" className="contact-section">
				<div className="content-wrapper">
					<nav className="footer-nav">
						<ul>
							<li>
								<a href={linkedIn} target="_blank">
									<i class="fa-brands fa-linkedin-in"></i>
								</a>
							</li>
							<li>
								<a href={github} target="_blank">
									<i class="fa-brands fa-github"></i>
								</a>
							</li>
							<li>
								<a href="mailto:sarah1591@gmail.com">
									<i class="fa-regular fa-envelope"></i>
								</a>
							</li>
							<li>
								<a href="tel:315-935-6605">
									<i class="fa-solid fa-phone"></i>
								</a>
							</li>
							<li className="resume-icon-wrapper">
								<a
									href={resumeLink}
									target="_blank"
									style={{
										backgroundImage: `url(${resume})`,
									}}
									className="resume-icon"
								></a>
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
}

export default App;
