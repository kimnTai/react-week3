import { Link, useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>That feels like an existential question, don't you think?</p>
            </main>
            <nav>
                <Link to="/">Home</Link>
                <input type="button" value="回首頁" onClick={() => navigate("/")} />
            </nav>
        </>
    );
}
