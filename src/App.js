import React from "react";

//Styles
import "./App.scss";

//Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

//Images
import upArrow from "./images/up-arrow.png";

function App() {
	return (
		<>
			<div className="page-nav-arrow">
				<img src={upArrow} alt="Page up site navigation arrow"></img>
			</div>
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Resume />
			<Footer />
		</>
	);
}

export default App;
