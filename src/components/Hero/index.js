import React from "react";

//Components
import Button from "../Button";

//Images
import avatarPinkBackground from "../../images/avatar-pink-background.svg";
import chalkLineGrey from "../../images/chalk-line-grey.svg";

const Hero = () => {
	return (
		<>
			<section id="hero" className="hero section">
				<h1>Hey there, I'm Sarah.</h1>
				<div className="hero__container container">
					<div className="column hero__column hero__content-column">
						<p>
						Frontend Engineer with 5+ years of experience building responsive, accessible apps using React, TailwindCSS, and modern web standards.
						</p>
						<Button
							className="button"
							btnLink="#projects"
							btnText="Explore My Projects"
						/>
					</div>
					<div className="column hero_column hero__img-column">
						<div className="hero__img-wrapper">
							<img src={avatarPinkBackground} alt="Avatar of myself"></img>
						</div>
					</div>
				</div>
				<div
					className="hero__chalk-border-grey"
					style={{
						backgroundImage: `url(${chalkLineGrey})`,
					}}
				></div>
			</section>
		</>
	);
};

export default Hero;
