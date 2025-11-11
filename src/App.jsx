import './App.css'
import {NavBar} from "./components/NavBar.jsx";
import {Home} from "./sections/Home.jsx";
import {AboutMe} from "./sections/AboutMe.jsx";
import {Projects} from "./sections/Projects.jsx";
import {Contact} from "./sections/Contact.jsx";

function App() {

    return (
        <>
            <NavBar/>
            <Home/>
            <AboutMe/>
            <Projects/>
            <Contact/>
        </>
    )
}

export default App
