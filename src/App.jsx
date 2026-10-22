import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/Navbar";

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>

                <Routes>

                    <Route
                        path="/"
                        element={<Welcome />}
                    />

                    <Route
                        path="/home"
                        element={
                            <>
                                <Navbar />
                                <Home />
                            </>
                        }
                    />

                    <Route
                        path="/about"
                        element={
                            <>
                                <Navbar />
                                <About />
                            </>
                        }
                    />

                    <Route
                        path="/skills"
                        element={
                            <>
                                <Navbar />
                                <Skills />
                            </>
                        }
                    />

                    <Route
                        path="/projects"
                        element={
                            <>
                                <Navbar />
                                <Projects />
                            </>
                        }
                    />

                    <Route
                        path="/education"
                        element={
                            <>
                                <Navbar />
                                <Education />
                            </>
                        }
                    />

                    <Route
                        path="/achievements"
                        element={
                            <>
                                <Navbar />
                                <Achievements />
                            </>
                        }
                    />

                    <Route
                        path="/contact"
                        element={
                            <>
                                <Navbar />
                                <Contact />
                            </>
                        }
                    />

                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />

                </Routes>

            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;