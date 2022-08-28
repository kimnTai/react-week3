import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Detail from "./views/Detail";
import Home from "./views/Home";
import List from "./views/List";

export default function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path=":id" element={<Detail />} />
                <Route path="*" element={<h1>無此路徑</h1>} />
            </Routes>
            <Footer />
        </div>
    );
}
