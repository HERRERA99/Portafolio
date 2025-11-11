import "../styles/AboutMe.css"

export function AboutMe() {
    return (
        <>
            <section id="aboutMe" className="aboutMe-section">
                <div className="container aboutMe-container">
                    <h1 className="title aboutMe-title">ABOUT ME</h1>
                    <p className="aboutMe-description">
                        Hi, I’m Aitor, a Computer Engineering graduate from the University of Cantabria, specializing in
                        Software Development. I work as a full-stack developer, building efficient, well-structured
                        applications with a strong focus on user experience.
                    </p>
                    <p className="aboutMe-description">
                        On the backend, I design robust architectures using Spring Boot (Java) and manage databases with
                        SQL Server and MySQL. On the frontend, I develop web interfaces with React and native Android
                        apps using Kotlin and Jetpack Compose, while also maintaining legacy projects in Java and XML.
                        I’m also experienced with C#, C++, C, and Python, which allows me to adapt quickly to different
                        environments.
                    </p>
                    <p className="aboutMe-description">
                        I’ve worked on interactive media projects using Unity and Unreal Engine, which has given me
                        deeper insight into performance optimization, real-time rendering workflows, and the design of
                        complex interactive systems. This background complements my software engineering experience,
                        allowing me to approach problems with both technical rigor and creative problem-solving. It has
                        also helped me understand how to integrate visual design, user interaction, and efficient
                        architecture into cohesive, high-quality products.
                    </p>
                    <p className="aboutMe-description">
                        I’m driven by continuous learning and by creating software that is solid, useful, and enjoyable
                        to use. I like taking on projects that push me to grow, whether through new technologies or
                        challenging architectural decisions. Outside of coding, I’m passionate about sports —especially
                        cycling— and I’m an avid videogame enthusiast, both of which keep me inspired and focused.
                    </p>
                </div>
            </section>
        </>
    )
}