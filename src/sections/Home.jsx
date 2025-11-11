import "../styles/Home.css"
import AnimatedContent from "../components/AnimatedContent.jsx";
import FadeContent from "../components/FadeContent.jsx";
import {FaDownload} from "react-icons/fa";

export function Home() {
    return (
        <>
            <section id="home" className="home-section">
                <div className="container home-container">
                    <div className="home-text">
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
                            <h1 className="home-title">Hi, I'm <strong className="home-text-name">Aitor Angulo Salas</strong> a Software Engineer</h1>
                            <p className="description">
                                who turns curiosity into progress, crafting digital experiences that inspire growth every day.
                            </p>
                            <a href="/curriculumIngles.pdf" download>
                                <button className="btn-download-cv">
                                    <FaDownload />
                                    Download CV
                                </button>
                            </a>
                        </AnimatedContent>
                    </div>

                    <div className="home-avatar">
                        <div className="avatar-circle">
                            <FadeContent blur={true} duration={1800} easing="ease-out" initialOpacity={0}>
                                <img src="/PerfilAvatar.svg" alt="Foto Perfil"/>
                            </FadeContent>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}