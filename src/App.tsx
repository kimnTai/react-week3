import { Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Layout from "./routes/Layout";
import List from "./routes/List";

export default function App() {
    return (
        <div>
            <header>
                <h1>Welcome to React Router!</h1>
            </header>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path=":id" element={<List />} />
                    <Route path="*" element={<h2>無此路徑</h2>} />
                </Route>
            </Routes>
        </div>
    );
}
