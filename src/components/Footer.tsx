import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="container-fluid bg-dark">
            <Link className="h1 text-white" to="/">
                回首頁
            </Link>
        </div>
    );
}
