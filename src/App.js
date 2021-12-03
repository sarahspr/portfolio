import React from "react";

import "./App.scss";
import crochetHook from "./images/crochet-hook.png";
import yarn from "./images/yarn.png";
import golden from "./images/Golden-Retriever-1024.png";
import wheaten from "./images/Soft-Coated-Wheaten-Terrier-1024.png";
import dogBall from "./images/dog-ball.png";
import avatar from "./images/avatar.svg";
// import Navbar from "./components/Navbar/index.js";

function App() {
	return (
		<>
			{/* <Navbar /> */}
			<div className="page-wrapper">
				<div className="hero-section">
					<h1>Hey there, I'm Sarah Spriggs.</h1>
					<div className="content-container">
						<div className="column">
							<h3>Welcome to my corner of the internet.</h3>
							<a className="button" href="#about">
								Get to know me
							</a>
						</div>
						<div className="column img-container">
							<img src={avatar}></img>
						</div>
					</div>
				</div>
			</div>

			<img src={crochetHook}></img>
			<img src={yarn}></img>
			<img src={golden}></img>
			<img src={wheaten}></img>
			<img src={dogBall}></img>
		</>
	);
}

export default App;
