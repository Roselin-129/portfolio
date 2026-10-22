function Home() {

    return (
        <section className="page">

            <div className="hero">

                <div className="hero-content">

                    <p>
                        Hello, welcome to my portfolio
                    </p>

                    {/* Profile Image */}
                    <img
                        src="/my photo.jpeg"
                        alt="Roselin Angel D"
                    />

                    <h1>
                        Hi, I'm Roselin Angel D
                    </h1>

                    <h2>
                        Computer Science Engineering Student
                    </h2>

                    <p>
                        I am a Computer Science Engineering
                        student interested in software
                        development, web development and
                        emerging technologies.
                    </p>

                    {/* Buttons */}
                    <div className="hero-buttons">

                        <a href="/projects">
                            View My Projects
                        </a>

                        <a href="/contact">
                            Contact Me
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                        >
                            Download Resume
                        </a>

                        <div className="page-navigation">
    <a href="/about">
        Next: About →
    </a>
</div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Home;