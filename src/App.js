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

function App() {
	return (
		<>
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
