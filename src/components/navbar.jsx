import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {

    const {
        darkMode,
        toggleTheme
    } = useTheme();

    return (
        <nav className="navbar">

            <div className="logo">
                Roselin David.
            </div>

            <div className="nav-links">

                <Link to="/home">
                    Home
                </Link>

                <Link to="/about">
                    About
                </Link>

                <Link to="/skills">
                    Skills
                </Link>

                <Link to="/projects">
                    Projects
                </Link>

                <Link to="/education">
                    Education
                </Link>

                <Link to="/achievements">
                    Achievements
                </Link>

                <Link to="/contact">
                    Contact
                </Link>

            </div>

            <button
                onClick={toggleTheme}
                className="theme-button"
            >
                {darkMode
                    ? "☀️ Light Mode"
                    : "🌙 Dark Mode"}
            </button>

        </nav>
    );
}

export default Navbar;