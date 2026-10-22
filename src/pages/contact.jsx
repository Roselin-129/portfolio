import { Link } from "react-router-dom";

function Contact() {
    return (
        <section className="page">

            <h2>Contact Me</h2>

            <div className="contact-card">

                <p>📧 davidrosy204@gmail.com</p>

                <p>📱 +91 9840998255</p>

                <p>📍 Chennai, India</p>

                <p>GitHub: Roselin-129</p>

                <a href="mailto:davidrosy204@gmail.com">
                    Send Me an Email
                </a>

            </div>

            <div className="page-navigation">
                <Link to="/achievements">
                    ← Previous: Achievements
                </Link>

                <Link to="/home">
                    🏠 Back to Home
                </Link>
            </div>

        </section>
    );
}

export default Contact;