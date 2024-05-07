import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import NotFound from "./Components/NotFound/NotFound";

function App() {
    return (
        <div className="container-fluid-">
            <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
