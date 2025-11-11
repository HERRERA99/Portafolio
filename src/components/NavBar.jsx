import "../styles/NavBar.css";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function NavBar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = ["home", "aboutMe", "projects", "contact"];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleScroll = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const navItems = [
        { id: "home", label: "Home" },
        { id: "aboutMe", label: "About Me" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" }
    ];

    return (
        <header className="navbar-wrapper">
            <nav className="navbar-island">
                {/* IZQUIERDA */}
                <img src="/logo.svg" alt="Logo Aitor" className="navbar-logo" />

                {/* CENTRO */}
                <div className="navbar-links">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleScroll(item.id)}
                            className={`nav-btn ${activeSection === item.id ? "active" : ""}`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* DERECHA */}
                <div className="navbar-icons">
                    <a href="https://github.com/HERRERA99" target="_blank" rel="noreferrer">
                        <FaGithub className="nav-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/aitor-angulo-salas-b81356257/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="nav-icon" />
                    </a>
                </div>
            </nav>
        </header>
    );
}
