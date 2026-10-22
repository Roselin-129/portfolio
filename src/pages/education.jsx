import { Link } from "react-router-dom";

function Education() {
    return (
        <section className="page">

            <h2>Education & Experience</h2>

            <div className="timeline-item">
                <h3>B.E. Computer Science Engineering</h3>
                <p>S.A. Engineering College</p>
                <p>2023 – 2027</p>
                <p>CGPA: 7.93</p>
            </div>

            <div className="timeline-item">
                <h3>Software Development Intern</h3>
                <p>Nimu Technology</p>
                <p>May 2026 – June 2026</p>
            </div>

            <div className="timeline-item">
                <h3>HSC</h3>
                <p>
                    St. Aloysius A.I. Hr. Sec. School
                </p>
                <p>2023</p>
                <p>75.9%</p>
            </div>

            <div className="timeline-item">
                <h3>SSLC</h3>
                <p>
                    St. Aloysius A.I. Hr. Sec. School
                </p>
                <p>2021</p>
                <p>80%</p>
            </div>

            <div className="page-navigation">
                <Link to="/projects">
                    ← Previous: Projects
                </Link>

                <Link to="/achievements">
                    Next: Achievements →
                </Link>
            </div>

        </section>
    );
}

export default Education;