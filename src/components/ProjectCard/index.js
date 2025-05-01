import React from "react";

const ProjectCard = (props) => {
	let href = props.href;
	let imgSrc = props.imgSrc;
	let title = props.title;
	let technology = props.technology;

	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="project-card"
			style={{backgroundImage: `url(${imgSrc})`}}
		>
			<div className="project-card__overlay">
				<h3 className="h5 project-card__title">{title}</h3>
				<div className="project-card__technology">{technology}</div>
			</div>
		</a>
	);
};

export default ProjectCard;