import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="container-fluid bg-dark">
            <div className="row">
                <Link className="col h1 text-white" to="/">
                    高雄旅遊網
                </Link>
                <Link className="col h1 text-white" to="/list">
                    旅遊景點
                </Link>
            </div>
        </div>
    );
}
