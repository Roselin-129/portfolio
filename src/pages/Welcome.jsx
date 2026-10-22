import { useNavigate } from "react-router-dom";

function Welcome() {

    const navigate = useNavigate();

    return (
        <div className="welcome-page">

            <h1>
                Welcome to My Portfolio
            </h1>

            <p>
                Hello! Welcome to my personal portfolio.
            </p>

            <button
                onClick={() => navigate("/home")}
            >
                Enter Portfolio →
            </button>

        </div>
    );
}

export default Welcome;