import "../styles/Projects.css"
import projectsData from "../data/projects.json"
import {FaExternalLinkAlt, FaGithub, FaGlobe, FaLink} from "react-icons/fa";
import AnimatedContent from "../components/AnimatedContent.jsx";

export function Projects() {
    return (
        <>
            <section id="projects" className="projects-section">
                <div className="container projects-container">
                    <h1 className="title project-title">PROJECTS</h1>
                    {projectsData.map((project, index) => (
                        <AnimatedContent
                            distance={300}
                            direction="vertical"
                            reverse={false}
                            duration={1.8}
                            ease="power3.out"
                            initialOpacity={0.3}
                            animateOpacity={true}
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >
                            <div
                                key={index}
                                className="project-card"
                            >
                                {/* Imagen a la izquierda */}
                                <div className="image-wrapper">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                    />
                                </div>

                                {/* Contenido a la derecha */}
                                <div className="project-text-container">
                                    {/* Botones arriba a la derecha y titulo */}
                                    <div className="title-buttons-container">
                                        <h2 className="title-card-text">{project.title}</h2>
                                        <div className="botons-container">
                                            {project.repo && (
                                                <a
                                                    href={project.repo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="icon-button repo-button"
                                                >
                                                    <FaGithub/>
                                                </a>
                                            )}
                                            {project.web && (
                                                <a
                                                    href={project.web}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="icon-button web-button"
                                                >
                                                    <FaLink />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Descripción */}
                                    <p className="description-card-text">{project.description}</p>
                                </div>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </section>
        </>
    )
}