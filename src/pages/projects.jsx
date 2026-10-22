
import { Link } from "react-router-dom";

function Projects() {

    return (
        <section className="page">

            <h2>Projects</h2>

            <div className="project-card">

                <h3>QuizNova AI</h3>

                <p>
                    Built a full-stack quiz platform using ASP.NET Core
                    Web API, Next.js, PostgreSQL, and Tailwind CSS with
                    secure JWT authentication.

                    Developed role-based Teacher and Student dashboards
                    for quiz creation, AI-assisted question generation,
                    quiz attempts, and automatic scoring.

                    Implemented REST APIs, database integration, and
                    real-time result tracking to streamline online
                    assessments.
                </p>

            </div>

            <div className="project-card">

                <h3>Stock Maintenance Website</h3>

                <p>
                    Developed a web-based inventory management system to
                    add, purchase, and update product stock efficiently.

                    Implemented real-time stock tracking and transaction
                    management to maintain accurate inventory records.

                    Designed a user-friendly interface for monitoring
                    product availability and recent transactions.
                </p>

            </div>

            <div className="page-navigation">

                <Link to="/skills">
                    ← Previous: Skills
                </Link>

                <Link to="/education">
                    Next: Education →
                </Link>

            </div>

        </section>
    );
}

export default Projects;
