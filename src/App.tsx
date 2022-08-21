import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./views/Layout";
import List from "./views/List";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path="*" element={<h1>無此路徑</h1>} />
            </Route>
        </Routes>
    );
}
