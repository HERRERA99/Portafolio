import "../styles/AboutMe.css"

export function AboutMe() {
    return (
        <>
            <section id="aboutMe" className="aboutMe-section">
                <div className="container aboutMe-container">
                    <h1 className="title aboutMe-title">SOBRE MI</h1>
                    <p className="aboutMe-description">
                        Hola, soy Aitor, graduado en Ingeniería Informática por la Universidad de Cantabria,
                        especializado en Desarrollo de Software. Trabajo como desarrollador full-stack, creando
                        aplicaciones eficientes y bien estructuradas, con un fuerte enfoque en la experiencia de
                        usuario.
                    </p>
                    <p className="aboutMe-description">
                        En el backend, diseño arquitecturas robustas utilizando Spring Boot (Java) y gestiono bases de
                        datos con Microsoft SQL Server y MySQL. En el frontend, desarrollo interfaces web con React y
                        aplicaciones Android nativas usando Kotlin y Jetpack Compose, además de mantener proyectos
                        heredados en Java y XML. También tengo experiencia con C#, C++, C y Python, lo que me permite
                        adaptarme rápidamente a distintos entornos.
                    </p>
                    <p className="aboutMe-description">
                        He trabajado en proyectos de medios interactivos utilizando Unity y Unreal Engine, lo que me ha
                        proporcionado una comprensión más profunda de la optimización del rendimiento, los flujos de
                        trabajo de renderizado en tiempo real y el diseño de sistemas interactivos complejos. Esta base
                        complementa mi experiencia en ingeniería del software, permitiéndome abordar los problemas con
                        rigor técnico y creatividad en la resolución de soluciones. También me ha ayudado a entender
                        cómo integrar el diseño visual, la interacción del usuario y una arquitectura eficiente en
                        productos cohesionados y de alta calidad.
                    </p>
                    <p className="aboutMe-description">
                        Me impulsa el aprendizaje continuo y la creación de software sólido, útil y agradable de usar.
                        Me gusta asumir proyectos que me hagan crecer, ya sea incorporando nuevas tecnologías o
                        enfrentándome a decisiones arquitectónicas desafiantes. Fuera de la programación, me apasiona el
                        deporte —especialmente el ciclismo— y soy un gran aficionado a los videojuegos, ambas aficiones
                        me mantienen motivado y enfocado.
                    </p>
                </div>
            </section>
        </>
    )
}