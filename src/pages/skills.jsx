import { Link } from "react-router-dom";

function Skills() {
    return (
        <section className="page">

            <h2>Skills</h2>

            <div className="skill-card">
                <h3>Programming</h3>
                <p>Python</p>
            </div>

            <div className="skill-card">
                <h3>Web Development</h3>
                <p>HTML, CSS, React, Next.js</p>
            </div>

            <div className="skill-card">
                <h3>Database and APIs</h3>
                <p>
                    SQL, MongoDB, PostgreSQL, REST APIs
                </p>
            </div>

            <div className="skill-card">
                <h3>Tools and Languages</h3>
                <p>
                    Microsoft Word, Excel, English, Tamil
                </p>
            </div>

            <div className="page-navigation">
                <Link to="/about">
                    ← Previous: About
                </Link>

                <Link to="/projects">
                    Next: Projects →
                </Link>
            </div>

        </section>
    );
}

export default Skills;