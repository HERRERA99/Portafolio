import "../styles/Home.css"
import "../styles/Responsive.css"
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
                            <h1 className="home-title">
                                Hola, soy <strong className="home-text-name">Aitor Angulo Salas</strong>, Ingeniero de
                                Software
                            </h1>
                            <p className="description">
                                transformo la curiosidad en progreso, creando experiencias digitales que inspiran
                                crecimiento cada día.
                            </p>

                            <a href="/curriculum.pdf" download>
                                <button className="btn-download-cv">
                                    <FaDownload/>
                                    DESCARGAR CV
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