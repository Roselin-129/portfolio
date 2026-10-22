import { Link } from "react-router-dom";

function About() {
    return (
        <section className="page">

            <h2>About Me</h2>

            <p>
                I am a Computer Science Engineering student
                passionate about technology and software
                development.
            </p>

            <div className="page-navigation">
                <Link to="/home">
                    ← Previous: Home
                </Link>

                <Link to="/skills">
                    Next: Skills →
                </Link>
            </div>

        </section>
    );
}

export default About;