import { Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

export default function App() {
    return (
        <div>
            <header>
                <h1>Welcome to React Router!</h1>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<h2>無此路徑</h2>} />
            </Routes>
        </div>
    );
}
