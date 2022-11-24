import React from "react";

const ProjectCard = (props) => {
	let href = props.href;
	let imgSrc = props.imgSrc;
	let title = props.title;
	let technology = props.technology;

	return (
		<>
			<div className="project-card">
				<a
					href={href}
					target="_blank"
					rel="noreferrer"
					className="project-card__img-wrapper"
				>
					<img
						src={imgSrc}
						className="project-card__project-img"
						alt="screenshot of project homepage"
					/>
					<div className="project-card__overlay">
						<h3 className="h5 project-card__title">{title}</h3>
						<div className="project-card__technology">{technology}</div>
					</div>
				</a>
			</div>
		</>
	);
};

export default ProjectCard;
