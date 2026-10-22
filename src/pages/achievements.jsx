import { Link } from "react-router-dom";

function Achievements() {
    return (
        <section className="page">

            <h2>Certifications & Achievements</h2>

            <div className="achievement-card">
                Infosys Frontend Developer
            </div>

            <div className="achievement-card">
                Cisco Networking Academy Networking Basics
                and Introduction to Cybersecurity
            </div>

            <div className="achievement-card">
                AWS Academy Cloud Foundations
            </div>

            <div className="achievement-card">
                Winner – Paper Presentation at
                TECHNOCRATZ 2K26
            </div>

            <div className="achievement-card">
                IEEE Madras Section Cybersecurity Workshop
            </div>

            <div className="achievement-card">
                Entrepreneurship Workshop
            </div>

            <div className="page-navigation">
                <Link to="/education">
                    ← Previous: Education
                </Link>

                <Link to="/contact">
                    Next: Contact →
                </Link>
            </div>

        </section>
    );
}

export default Achievements;