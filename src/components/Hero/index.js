import React from "react";

//Components
import Button from "../Button";

//Images
import avatarPinkBackground from "../../images/avatar-pink-background.svg";
import chalkLineGrey from "../../images/chalk-line-grey.svg";

const Hero = () => {
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
			<section id="hero" className="hero section">
				<h1>Hey there, I'm Sarah.</h1>
				<div className="hero__container container">
					<div className="column hero__column hero__content-column">
						<div className="hero__content-column-wrapper">
							<span>
								I've been a CSS Wizard for 3+ years. Welcome to my corner of the
								internet.
							</span>
							<Button
								className="button"
								btnLink="#about"
								btnText="Get to know me"
							/>
						</div>
					</div>
					<div className="column hero_column hero__img-column">
						<div className="hero__img-wrapper">
							<img src={avatarPinkBackground} alt="Avatar of myself"></img>
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
